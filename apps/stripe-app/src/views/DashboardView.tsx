/**
 * Dashboard View
 *
 * Main view shown on the Stripe Dashboard home page
 * Displays surcharge settings and analytics
 */

import {
  Box,
  Button,
  ContextView,
  Divider,
  Icon,
  Inline,
  Link,
  Select,
  Spinner,
  Switch,
  TextField,
  Banner,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useCallback, useEffect, useState } from 'react';

const API_BASE_URL = 'https://backend-production-5e37.up.railway.app';

// States where surcharging is prohibited
const PROHIBITED_STATES = ['CA', 'CT', 'MA', 'ME', 'PR'];

interface MerchantSettings {
  id: string;
  surchargeRate: number;
  enabled: boolean;
  excludedStates: string[];
  mastercardNotifiedAt: string | null;
}

interface Analytics {
  totalTransactions: number;
  totalSurcharges: number;
  last30Days: {
    eligible: number;
    ineligible: number;
    surchargeAmount: number;
  };
}

export const DashboardView = ({
  userContext,
  environment,
}: ExtensionContextValue) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<MerchantSettings | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  // Form state
  const [surchargeRate, setSurchargeRate] = useState('2.9');
  const [enabled, setEnabled] = useState(true);
  const [excludedStates, setExcludedStates] = useState<string[]>([]);

  const stripeAccountId = userContext?.account?.id;

  // Fetch merchant settings on mount
  useEffect(() => {
    const fetchData = async () => {
      if (!stripeAccountId) return;

      try {
        setLoading(true);
        setError(null);

        // Fetch or create merchant
        let response = await fetch(
          `${API_BASE_URL}/api/merchants/by-stripe/${stripeAccountId}`
        );

        if (response.status === 404) {
          // Create merchant if doesn't exist
          response = await fetch(`${API_BASE_URL}/api/merchants`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              stripeAccountId,
              surchargeRate: 0.029,
              enabled: true,
              excludedStates: PROHIBITED_STATES, // Auto-exclude prohibited states
            }),
          });
        }

        if (!response.ok) {
          throw new Error('Failed to fetch merchant settings');
        }

        const merchant = await response.json();
        setSettings(merchant);
        setSurchargeRate((merchant.surchargeRate * 100).toFixed(1));
        setEnabled(merchant.enabled);
        setExcludedStates(merchant.excludedStates);

        // Fetch analytics
        const analyticsResponse = await fetch(
          `${API_BASE_URL}/api/merchants/${merchant.id}/analytics`
        );

        if (analyticsResponse.ok) {
          const analyticsData = await analyticsResponse.json();
          setAnalytics(analyticsData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stripeAccountId]);

  // Save settings
  const handleSave = useCallback(async () => {
    if (!settings?.id) return;

    try {
      setSaving(true);
      setError(null);

      const response = await fetch(
        `${API_BASE_URL}/api/merchants/${settings.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            surchargeRate: parseFloat(surchargeRate) / 100,
            enabled,
            excludedStates,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to save settings');
      }

      const updated = await response.json();
      setSettings(updated);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  }, [settings?.id, surchargeRate, enabled, excludedStates]);

  if (loading) {
    return (
      <ContextView title="SWA - Surcharge Automation">
        <Box css={{ padding: 'large', textAlign: 'center' }}>
          <Spinner size="large" />
          <Box css={{ marginTop: 'medium' }}>Loading settings...</Box>
        </Box>
      </ContextView>
    );
  }

  if (error) {
    return (
      <ContextView title="SWA - Surcharge Automation">
        <Banner
          type="critical"
          title="Error"
          description={error}
          actions={
            <Button onPress={() => window.location.reload()}>Retry</Button>
          }
        />
      </ContextView>
    );
  }

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  return (
    <ContextView
      title="SWA - Surcharge Automation"
      actions={
        <Button type="primary" onPress={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save Settings'}
        </Button>
      }
    >
      {/* Analytics Summary */}
      {analytics && (
        <Box css={{ marginBottom: 'large' }}>
          <Box css={{ fontWeight: 'semibold', marginBottom: 'small' }}>
            Last 30 Days
          </Box>
          <Inline css={{ gap: 'large' }}>
            <Box>
              <Box css={{ fontSize: 'small', color: 'secondary' }}>
                Surcharges Collected
              </Box>
              <Box css={{ fontSize: 'xlarge', fontWeight: 'bold' }}>
                {formatCurrency(analytics.last30Days.surchargeAmount)}
              </Box>
            </Box>
            <Box>
              <Box css={{ fontSize: 'small', color: 'secondary' }}>
                Eligible Transactions
              </Box>
              <Box css={{ fontSize: 'xlarge', fontWeight: 'bold' }}>
                {analytics.last30Days.eligible}
              </Box>
            </Box>
            <Box>
              <Box css={{ fontSize: 'small', color: 'secondary' }}>
                Ineligible (Debit/State)
              </Box>
              <Box css={{ fontSize: 'xlarge', fontWeight: 'bold' }}>
                {analytics.last30Days.ineligible}
              </Box>
            </Box>
          </Inline>
        </Box>
      )}

      <Divider />

      {/* Settings */}
      <Box css={{ marginTop: 'large' }}>
        <Box css={{ fontWeight: 'semibold', marginBottom: 'medium' }}>
          Surcharge Settings
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Switch
            label="Enable Surcharging"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <Box css={{ fontSize: 'small', color: 'secondary', marginTop: 'xsmall' }}>
            When disabled, no surcharges will be applied to any transactions
          </Box>
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <TextField
            label="Surcharge Rate (%)"
            value={surchargeRate}
            onChange={(e) => setSurchargeRate(e.target.value)}
            type="number"
            min="0"
            max="3"
            step="0.1"
          />
          <Box css={{ fontSize: 'small', color: 'secondary', marginTop: 'xsmall' }}>
            Maximum allowed: 3% (Visa/Mastercard rules). Some states have lower caps.
          </Box>
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Box css={{ marginBottom: 'xsmall', fontWeight: 'medium' }}>
            Excluded States
          </Box>
          <Box css={{ fontSize: 'small', color: 'secondary', marginBottom: 'small' }}>
            Customers from these states will not be charged a surcharge.
            States marked with * are prohibited by law and cannot be removed.
          </Box>
          <Inline css={{ gap: 'small', flexWrap: 'wrap' }}>
            {['CA', 'CT', 'MA', 'ME', 'CO', 'MT', 'NY', 'PR'].map((state) => {
              const isProhibited = PROHIBITED_STATES.includes(state);
              const isExcluded = excludedStates.includes(state);

              return (
                <Button
                  key={state}
                  type={isExcluded ? 'primary' : 'secondary'}
                  disabled={isProhibited}
                  onPress={() => {
                    if (isProhibited) return;
                    if (isExcluded) {
                      setExcludedStates(excludedStates.filter((s) => s !== state));
                    } else {
                      setExcludedStates([...excludedStates, state]);
                    }
                  }}
                >
                  {state}
                  {isProhibited ? '*' : ''}
                </Button>
              );
            })}
          </Inline>
        </Box>
      </Box>

      <Divider />

      {/* Compliance Section */}
      <Box css={{ marginTop: 'large' }}>
        <Box css={{ fontWeight: 'semibold', marginBottom: 'medium' }}>
          Compliance
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            <Icon name="checkCircle" css={{ color: 'success' }} />
            <Box>BIN Detection: Active</Box>
          </Inline>
          <Box css={{ fontSize: 'small', color: 'secondary', marginLeft: 'large' }}>
            Debit and prepaid cards are automatically excluded from surcharging
          </Box>
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            <Icon name="checkCircle" css={{ color: 'success' }} />
            <Box>State Compliance: Active</Box>
          </Inline>
          <Box css={{ fontSize: 'small', color: 'secondary', marginLeft: 'large' }}>
            Prohibited states (CA, CT, MA, ME, PR) are automatically blocked
          </Box>
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            {settings?.mastercardNotifiedAt ? (
              <Icon name="checkCircle" css={{ color: 'success' }} />
            ) : (
              <Icon name="warning" css={{ color: 'warning' }} />
            )}
            <Box>Mastercard Notification</Box>
          </Inline>
          <Box css={{ fontSize: 'small', color: 'secondary', marginLeft: 'large' }}>
            {settings?.mastercardNotifiedAt
              ? `Sent on ${new Date(settings.mastercardNotifiedAt).toLocaleDateString()}`
              : 'Required 30 days before surcharging Mastercard transactions'}
          </Box>
          {!settings?.mastercardNotifiedAt && (
            <Box css={{ marginTop: 'small', marginLeft: 'large' }}>
              <Link href={`${API_BASE_URL}/compliance/mastercard-letter`}>
                Generate notification letter
              </Link>
            </Box>
          )}
        </Box>
      </Box>

      <Divider />

      {/* Integration */}
      <Box css={{ marginTop: 'large' }}>
        <Box css={{ fontWeight: 'semibold', marginBottom: 'medium' }}>
          Integration
        </Box>
        <Box css={{ fontSize: 'small', color: 'secondary' }}>
          Merchant ID: <code>{settings?.id}</code>
        </Box>
        <Box css={{ marginTop: 'small' }}>
          <Link href="https://docs.swa.dev/integration">
            View integration documentation
          </Link>
        </Box>
      </Box>
    </ContextView>
  );
};

export default DashboardView;
