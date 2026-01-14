/**
 * Dashboard View
 *
 * Main view shown on the Stripe Dashboard home page
 * Displays surcharge settings and analytics with focus on money recovered
 */

import {
  Box,
  Button,
  ContextView,
  Divider,
  Inline,
  Link,
  Select,
  Switch,
  Badge,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { useCallback, useEffect, useState } from 'react';
import fetchStripeSignature from '@stripe/ui-extension-sdk/signature';

// States where surcharging is prohibited by law
const PROHIBITED_STATES = ['CA', 'CT', 'MA', 'ME', 'PR'];

// Common surcharge rate options
const RATE_OPTIONS = [
  { label: '2.0%', value: '2.0' },
  { label: '2.5%', value: '2.5' },
  { label: '2.9%', value: '2.9' },
  { label: '3.0% (Max)', value: '3.0' },
];

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

// Backend API URL
const BACKEND_URL = 'https://backend-production-5e37.up.railway.app';

// Helper to make authenticated backend requests
async function backendFetch(path: string, options: RequestInit = {}) {
  const signature = await fetchStripeSignature();
  const response = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      'Stripe-Signature': signature,
    },
  });
  return response;
}

const DashboardView = ({ userContext }: ExtensionContextValue) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<MerchantSettings | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form state
  const [surchargeRate, setSurchargeRate] = useState('2.9');
  const [enabled, setEnabled] = useState(true);
  const [excludedStates, setExcludedStates] = useState<string[]>([]);

  const stripeAccountId = userContext?.account?.id;

  // Fetch merchant settings on mount
  useEffect(() => {
    const fetchData = async () => {
      if (!stripeAccountId) {
        setError('Unable to identify Stripe account');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch or create merchant
        let response = await backendFetch(`/api/merchants/by-stripe/${stripeAccountId}`);

        if (response.status === 404) {
          // Create merchant if doesn't exist
          response = await backendFetch('/api/merchants', {
            method: 'POST',
            body: JSON.stringify({
              stripeAccountId,
              surchargeRate: 0.029,
              enabled: true,
              excludedStates: PROHIBITED_STATES,
            }),
          });
        }

        if (!response.ok) {
          throw new Error('Failed to load merchant settings');
        }

        const merchant = await response.json();
        setSettings(merchant);
        setSurchargeRate((merchant.surchargeRate * 100).toFixed(1));
        setEnabled(merchant.enabled);
        setExcludedStates(merchant.excludedStates || []);

        // Fetch analytics (don't fail if this errors)
        try {
          const analyticsResponse = await backendFetch(`/api/merchants/${merchant.id}/analytics`);
          if (analyticsResponse.ok) {
            const analyticsData = await analyticsResponse.json();
            setAnalytics(analyticsData);
          }
        } catch {
          // Analytics fetch failed, continue without it
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
      setSaveSuccess(false);

      const response = await backendFetch(`/api/merchants/${settings.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          surchargeRate: parseFloat(surchargeRate) / 100,
          enabled,
          excludedStates,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save settings');
      }

      const updated = await response.json();
      setSettings(updated);
      setSaveSuccess(true);

      // Clear success message after 3 seconds
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  }, [settings?.id, surchargeRate, enabled, excludedStates]);

  // Retry loading
  const handleRetry = useCallback(() => {
    setError(null);
    setLoading(true);
    // Re-trigger the useEffect by forcing a state change
    setSettings(null);
  }, []);

  // Format currency
  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  // Loading state
  if (loading) {
    return (
      <ContextView title="GlassFee">
        <Box css={{ padding: 'large', textAlign: 'center' }}>
          <Box css={{ color: 'secondary' }}>Loading your dashboard...</Box>
        </Box>
      </ContextView>
    );
  }

  // Error state
  if (error && !settings) {
    return (
      <ContextView title="GlassFee">
        <Box css={{ padding: 'medium' }}>
          <Box css={{
            backgroundColor: 'container',
            padding: 'medium',
            borderRadius: 'medium',
            marginBottom: 'medium'
          }}>
            <Box css={{ fontWeight: 'semibold', marginBottom: 'xsmall', color: 'critical' }}>
              Unable to Load
            </Box>
            <Box css={{ fontSize: 'small', color: 'secondary' }}>
              {error}
            </Box>
          </Box>
          <Button onPress={handleRetry}>Try Again</Button>
        </Box>
      </ContextView>
    );
  }

  return (
    <ContextView
      title="GlassFee"
      actions={
        <Button type="primary" onPress={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </Button>
      }
    >
      {/* Success message */}
      {saveSuccess && (
        <Box css={{
          backgroundColor: 'positive',
          padding: 'small',
          borderRadius: 'small',
          marginBottom: 'medium'
        }}>
          <Box css={{ fontSize: 'small', color: 'primary' }}>
            Settings saved successfully
          </Box>
        </Box>
      )}

      {/* Error message (non-blocking) */}
      {error && settings && (
        <Box css={{
          backgroundColor: 'critical',
          padding: 'small',
          borderRadius: 'small',
          marginBottom: 'medium'
        }}>
          <Box css={{ fontSize: 'small' }}>{error}</Box>
        </Box>
      )}

      {/* Hero: Money Recovered */}
      <Box css={{
        backgroundColor: 'container',
        padding: 'large',
        borderRadius: 'medium',
        marginBottom: 'large',
        textAlign: 'center'
      }}>
        <Box css={{ fontSize: 'small', color: 'secondary', marginBottom: 'xsmall' }}>
          Total Fees Recovered
        </Box>
        <Box css={{ fontSize: 'xxlarge', fontWeight: 'bold', marginBottom: 'xsmall' }}>
          {analytics ? formatCurrency(analytics.totalSurcharges) : '$0.00'}
        </Box>
        {analytics && analytics.last30Days.surchargeAmount > 0 && (
          <Box css={{ fontSize: 'small', color: 'positive' }}>
            +{formatCurrency(analytics.last30Days.surchargeAmount)} this month
          </Box>
        )}
      </Box>

      {/* Quick Stats */}
      {analytics && (
        <Box css={{ marginBottom: 'large' }}>
          <Box css={{ fontWeight: 'semibold', marginBottom: 'small', fontSize: 'small' }}>
            Last 30 Days
          </Box>
          <Inline css={{ gap: 'medium' }}>
            <Box css={{
              flex: 1,
              backgroundColor: 'container',
              padding: 'medium',
              borderRadius: 'small',
              textAlign: 'center'
            }}>
              <Box css={{ fontSize: 'large', fontWeight: 'bold' }}>
                {analytics.last30Days.eligible + analytics.last30Days.ineligible}
              </Box>
              <Box css={{ fontSize: 'xsmall', color: 'secondary' }}>Total</Box>
            </Box>
            <Box css={{
              flex: 1,
              backgroundColor: 'container',
              padding: 'medium',
              borderRadius: 'small',
              textAlign: 'center'
            }}>
              <Box css={{ fontSize: 'large', fontWeight: 'bold', color: 'positive' }}>
                {analytics.last30Days.eligible}
              </Box>
              <Box css={{ fontSize: 'xsmall', color: 'secondary' }}>Surcharged</Box>
            </Box>
            <Box css={{
              flex: 1,
              backgroundColor: 'container',
              padding: 'medium',
              borderRadius: 'small',
              textAlign: 'center'
            }}>
              <Box css={{ fontSize: 'large', fontWeight: 'bold' }}>
                {analytics.last30Days.ineligible}
              </Box>
              <Box css={{ fontSize: 'xsmall', color: 'secondary' }}>Blocked</Box>
            </Box>
          </Inline>
        </Box>
      )}

      <Divider />

      {/* Settings */}
      <Box css={{ marginTop: 'large', marginBottom: 'large' }}>
        <Box css={{ fontWeight: 'semibold', marginBottom: 'medium', fontSize: 'small' }}>
          Settings
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Switch
            label="Enable Surcharging"
            checked={enabled}
            onChange={(e: { target: { checked: boolean } }) => setEnabled(e.target.checked)}
          />
        </Box>

        <Box css={{ marginBottom: 'medium' }}>
          <Select
            label="Surcharge Rate"
            value={surchargeRate}
            onChange={(e: { target: { value: string } }) => setSurchargeRate(e.target.value)}
          >
            {RATE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Box css={{ fontSize: 'xsmall', color: 'secondary', marginTop: 'xsmall' }}>
            Card network maximum is 3%
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* Compliance Status */}
      <Box css={{ marginTop: 'large', marginBottom: 'large' }}>
        <Box css={{ fontWeight: 'semibold', marginBottom: 'medium', fontSize: 'small' }}>
          Compliance
        </Box>

        <Box css={{ marginBottom: 'small' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            <Badge type="positive">Active</Badge>
            <Box css={{ fontSize: 'small' }}>Card Detection</Box>
          </Inline>
          <Box css={{ fontSize: 'xsmall', color: 'secondary', marginLeft: 'xlarge' }}>
            Debit & prepaid cards automatically excluded
          </Box>
        </Box>

        <Box css={{ marginBottom: 'small' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            <Badge type="positive">Active</Badge>
            <Box css={{ fontSize: 'small' }}>State Rules</Box>
          </Inline>
          <Box css={{ fontSize: 'xsmall', color: 'secondary', marginLeft: 'xlarge' }}>
            {PROHIBITED_STATES.length} states blocked (CA, CT, MA, ME, PR)
          </Box>
        </Box>

        <Box css={{ marginBottom: 'small' }}>
          <Inline css={{ alignItems: 'center', gap: 'small' }}>
            {settings?.mastercardNotifiedAt ? (
              <Badge type="positive">Complete</Badge>
            ) : (
              <Badge type="warning">Action Needed</Badge>
            )}
            <Box css={{ fontSize: 'small' }}>Mastercard Notice</Box>
          </Inline>
          <Box css={{ fontSize: 'xsmall', color: 'secondary', marginLeft: 'xlarge' }}>
            {settings?.mastercardNotifiedAt
              ? `Sent ${new Date(settings.mastercardNotifiedAt).toLocaleDateString()}`
              : 'Required 30 days before surcharging'}
          </Box>
          {!settings?.mastercardNotifiedAt && settings?.id && (
            <Box css={{ marginTop: 'xsmall', marginLeft: 'xlarge' }}>
              <Link
                href={`${BACKEND_URL}/api/merchants/${settings.id}/compliance/mastercard-letter`}
                external
              >
                Generate letter →
              </Link>
            </Box>
          )}
        </Box>
      </Box>

      <Divider />

      {/* Footer */}
      <Box css={{ marginTop: 'medium' }}>
        <Box css={{ fontSize: 'xsmall', color: 'secondary' }}>
          Merchant ID: {settings?.id || '—'}
        </Box>
        <Box css={{ marginTop: 'xsmall' }}>
          <Link href="https://github.com/dk-webt/swa/blob/master/docs/integration.md" external>
            Integration Guide →
          </Link>
        </Box>
      </Box>
    </ContextView>
  );
};

export default DashboardView;
