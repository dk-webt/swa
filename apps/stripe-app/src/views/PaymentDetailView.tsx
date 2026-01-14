/**
 * Payment Detail View
 *
 * Shown on the payment/charge detail page in Stripe Dashboard
 * Displays surcharge information for the specific payment
 */

import {
  Box,
  ContextView,
  Divider,
  Inline,
  Badge,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';

interface PaymentIntentObject {
  metadata?: Record<string, string>;
}

const PaymentDetailView = ({
  environment,
}: ExtensionContextValue) => {
  // Get payment intent from environment context
  const paymentIntent = environment?.objectContext?.object as PaymentIntentObject | undefined;

  if (!paymentIntent) {
    return (
      <ContextView title="SWA Surcharge Info">
        <Box css={{ color: 'secondary' }}>
          No payment information available
        </Box>
      </ContextView>
    );
  }

  // Extract SWA metadata
  const metadata = paymentIntent.metadata || {};
  const swaMerchantId = metadata.swa_merchant_id;
  const swaBaseAmount = parseInt(metadata.swa_base_amount || '0', 10);
  const swaSurchargeAmount = parseInt(metadata.swa_surcharge_amount || '0', 10);
  const swaEligible = metadata.swa_eligible === 'true';
  const swaReason = metadata.swa_reason || 'unknown';

  // Check if this payment was processed through SWA
  if (!swaMerchantId) {
    return (
      <ContextView title="SWA Surcharge Info">
        <Box css={{ color: 'secondary' }}>
          This payment was not processed through SWA
        </Box>
      </ContextView>
    );
  }

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  const getReasonLabel = (reason: string): string => {
    const labels: Record<string, string> = {
      eligible: 'Surcharge Applied',
      state_prohibited: 'State Prohibited',
      debit_card: 'Debit Card',
      prepaid_card: 'Prepaid Card',
      unknown_card_type: 'Unknown Card Type',
      merchant_disabled: 'Surcharging Disabled',
      merchant_excluded_state: 'State Excluded by Merchant',
    };
    return labels[reason] || reason;
  };

  const getStatusBadge = () => {
    if (swaEligible && swaSurchargeAmount > 0) {
      return <Badge type="positive">Surcharge Applied</Badge>;
    }
    return <Badge type="neutral">No Surcharge</Badge>;
  };

  return (
    <ContextView title="SWA Surcharge Info">
      <Box css={{ marginBottom: 'medium' }}>
        {getStatusBadge()}
      </Box>

      <Box css={{ marginBottom: 'large' }}>
        <Inline css={{ gap: 'xlarge' }}>
          <Box>
            <Box css={{ fontSize: 'small', color: 'secondary' }}>
              Base Amount
            </Box>
            <Box css={{ fontSize: 'large', fontWeight: 'semibold' }}>
              {formatCurrency(swaBaseAmount)}
            </Box>
          </Box>

          {swaSurchargeAmount > 0 && (
            <>
              <Box>
                <Box css={{ fontSize: 'small', color: 'secondary' }}>
                  Surcharge
                </Box>
                <Box css={{ fontSize: 'large', fontWeight: 'semibold' }}>
                  {formatCurrency(swaSurchargeAmount)}
                </Box>
              </Box>

              <Box>
                <Box css={{ fontSize: 'small', color: 'secondary' }}>
                  Total Charged
                </Box>
                <Box css={{ fontSize: 'large', fontWeight: 'semibold' }}>
                  {formatCurrency(swaBaseAmount + swaSurchargeAmount)}
                </Box>
              </Box>
            </>
          )}
        </Inline>
      </Box>

      <Divider />

      <Box css={{ marginTop: 'medium' }}>
        <Box css={{ fontWeight: 'medium', marginBottom: 'small' }}>
          Eligibility Details
        </Box>

        <Box css={{ marginBottom: 'small' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            {swaEligible ? (
              <Badge type="positive">Eligible</Badge>
            ) : (
              <Badge type="warning">Not Eligible</Badge>
            )}
            <Box>{getReasonLabel(swaReason)}</Box>
          </Inline>
        </Box>

        {!swaEligible && (
          <Box css={{ fontSize: 'small', color: 'secondary' }}>
            {swaReason === 'debit_card' && (
              'Surcharging debit cards is prohibited in the US'
            )}
            {swaReason === 'state_prohibited' && (
              "The customer's billing state prohibits surcharging"
            )}
            {swaReason === 'prepaid_card' && (
              'Surcharging prepaid cards is not allowed'
            )}
            {swaReason === 'unknown_card_type' && (
              'Could not determine card type'
            )}
          </Box>
        )}
      </Box>

      {swaSurchargeAmount > 0 && (
        <>
          <Divider />
          <Box css={{ marginTop: 'medium' }}>
            <Box css={{ fontSize: 'small', color: 'secondary' }}>
              Rate Applied: {((swaSurchargeAmount / swaBaseAmount) * 100).toFixed(2)}%
            </Box>
          </Box>
        </>
      )}
    </ContextView>
  );
};

export default PaymentDetailView;
