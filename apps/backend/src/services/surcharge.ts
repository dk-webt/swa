/**
 * Surcharge calculation service
 *
 * Calculates the surcharge amount based on merchant settings,
 * state rules, and card network limits.
 */

import {
  checkEligibility,
  getMaxSurchargeRate,
  type CardFunding,
  type EligibilityResult,
} from './compliance.js';

export interface SurchargeCalculationInput {
  baseAmount: number; // Amount in cents
  merchantSurchargeRate: number; // Merchant's configured rate (e.g., 0.029 = 2.9%)
  billingState: string | null;
  cardFunding: CardFunding;
  merchantExcludedStates?: string[];
  merchantEnabled?: boolean;
}

export interface SurchargeCalculationResult {
  eligible: boolean;
  eligibilityReason: string;
  baseAmount: number;
  surchargeAmount: number;
  totalAmount: number;
  effectiveRate: number;
  disclosureText: string;
}

/**
 * Calculate surcharge for a transaction
 */
export function calculateSurcharge(
  input: SurchargeCalculationInput
): SurchargeCalculationResult {
  const {
    baseAmount,
    merchantSurchargeRate,
    billingState,
    cardFunding,
    merchantExcludedStates = [],
    merchantEnabled = true,
  } = input;

  // Check eligibility
  const eligibility = checkEligibility(
    billingState,
    cardFunding,
    merchantExcludedStates,
    merchantEnabled
  );

  if (!eligibility.eligible) {
    return {
      eligible: false,
      eligibilityReason: eligibility.reason,
      baseAmount,
      surchargeAmount: 0,
      totalAmount: baseAmount,
      effectiveRate: 0,
      disclosureText: '',
    };
  }

  // Determine effective rate (min of merchant rate and max allowed)
  const maxRate = eligibility.maxRate ?? getMaxSurchargeRate(billingState);
  const effectiveRate = Math.min(merchantSurchargeRate, maxRate);

  // Calculate surcharge (round to nearest cent)
  const surchargeAmount = Math.round(baseAmount * effectiveRate);
  const totalAmount = baseAmount + surchargeAmount;

  // Format disclosure text
  const disclosureText = formatDisclosure(
    surchargeAmount,
    effectiveRate,
    eligibility.requiresDualPricing ?? false
  );

  return {
    eligible: true,
    eligibilityReason: eligibility.reason,
    baseAmount,
    surchargeAmount,
    totalAmount,
    effectiveRate,
    disclosureText,
  };
}

/**
 * Format the surcharge disclosure text
 * Required by card networks for compliance
 */
function formatDisclosure(
  surchargeAmount: number,
  rate: number,
  dualPricing: boolean
): string {
  const surchargeFormatted = formatCurrency(surchargeAmount);
  const rateFormatted = (rate * 100).toFixed(2);

  if (dualPricing) {
    return `Credit card price includes a ${rateFormatted}% fee (${surchargeFormatted}). Pay with cash or debit for the base price.`;
  }

  return `A ${rateFormatted}% surcharge (${surchargeFormatted}) will be added for credit card payments.`;
}

/**
 * Format cents as currency string
 */
function formatCurrency(cents: number): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(dollars);
}

/**
 * Batch calculation for multiple items
 */
export function calculateBatchSurcharge(
  items: Array<{ amount: number; description?: string }>,
  merchantSurchargeRate: number,
  billingState: string | null,
  cardFunding: CardFunding,
  merchantExcludedStates: string[] = [],
  merchantEnabled: boolean = true
): {
  eligible: boolean;
  eligibilityReason: string;
  items: Array<{ amount: number; surcharge: number; description?: string }>;
  totalBase: number;
  totalSurcharge: number;
  grandTotal: number;
  disclosureText: string;
} {
  // Check eligibility once for all items
  const eligibility = checkEligibility(
    billingState,
    cardFunding,
    merchantExcludedStates,
    merchantEnabled
  );

  if (!eligibility.eligible) {
    return {
      eligible: false,
      eligibilityReason: eligibility.reason,
      items: items.map(item => ({
        amount: item.amount,
        surcharge: 0,
        description: item.description,
      })),
      totalBase: items.reduce((sum, item) => sum + item.amount, 0),
      totalSurcharge: 0,
      grandTotal: items.reduce((sum, item) => sum + item.amount, 0),
      disclosureText: '',
    };
  }

  const maxRate = eligibility.maxRate ?? getMaxSurchargeRate(billingState);
  const effectiveRate = Math.min(merchantSurchargeRate, maxRate);

  const calculatedItems = items.map(item => ({
    amount: item.amount,
    surcharge: Math.round(item.amount * effectiveRate),
    description: item.description,
  }));

  const totalBase = calculatedItems.reduce((sum, item) => sum + item.amount, 0);
  const totalSurcharge = calculatedItems.reduce((sum, item) => sum + item.surcharge, 0);
  const grandTotal = totalBase + totalSurcharge;

  const disclosureText = formatDisclosure(
    totalSurcharge,
    effectiveRate,
    eligibility.requiresDualPricing ?? false
  );

  return {
    eligible: true,
    eligibilityReason: eligibility.reason,
    items: calculatedItems,
    totalBase,
    totalSurcharge,
    grandTotal,
    disclosureText,
  };
}
