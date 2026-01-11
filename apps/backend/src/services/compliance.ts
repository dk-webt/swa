/**
 * State compliance rules engine for credit card surcharging
 *
 * Legal reference: As of 2024-2025, surcharging is prohibited or restricted in certain states.
 * This module determines eligibility based on billing address state and card funding type.
 */

export type CardFunding = 'credit' | 'debit' | 'prepaid' | 'unknown';

export interface StateRule {
  prohibited: boolean;
  maxRate?: number; // Max surcharge rate allowed (e.g., 0.02 = 2%)
  requiresDualPricing?: boolean; // Must show cash vs card price
  notes?: string;
}

export interface EligibilityResult {
  eligible: boolean;
  reason: EligibilityReason;
  maxRate?: number;
  requiresDualPricing?: boolean;
}

export type EligibilityReason =
  | 'eligible'
  | 'state_prohibited'
  | 'state_capped'
  | 'debit_card'
  | 'prepaid_card'
  | 'unknown_card_type'
  | 'merchant_disabled'
  | 'merchant_excluded_state';

// State rules as of 2024-2025
// Sources:
// - https://merchantcostconsulting.com/lower-credit-card-processing-fees/credit-card-surcharge-laws-by-state/
// - https://www.nickel.com/surcharge-laws
const STATE_RULES: Record<string, StateRule> = {
  // Prohibited states
  CT: { prohibited: true, notes: 'Connecticut - surcharging prohibited' },
  ME: { prohibited: true, notes: 'Maine - surcharging prohibited' },
  MA: { prohibited: true, notes: 'Massachusetts - surcharging prohibited' },
  CA: { prohibited: true, notes: 'California - SB 478 effective July 1, 2024' },
  PR: { prohibited: true, notes: 'Puerto Rico - surcharging prohibited' },

  // States with caps
  CO: { prohibited: false, maxRate: 0.02, notes: 'Colorado - max 2% cap' },
  MT: { prohibited: false, maxRate: 0.03, notes: 'Montana - max 3% cap' },

  // States with special requirements
  NY: {
    prohibited: false,
    requiresDualPricing: true,
    notes: 'New York - must show dual pricing (cash vs card)'
  },
};

// Default max rate per card network rules (Visa reduced to 3% in April 2023)
const DEFAULT_MAX_RATE = 0.03;

/**
 * Check if a card funding type is surchargeable
 * Only credit cards can be surcharged - debit and prepaid are prohibited
 */
export function isCardTypeSurchargeable(funding: CardFunding): boolean {
  return funding === 'credit';
}

/**
 * Get the rule for a specific state
 */
export function getStateRule(stateCode: string): StateRule | undefined {
  return STATE_RULES[stateCode.toUpperCase()];
}

/**
 * Get all prohibited states
 */
export function getProhibitedStates(): string[] {
  return Object.entries(STATE_RULES)
    .filter(([_, rule]) => rule.prohibited)
    .map(([state]) => state);
}

/**
 * Get all states with rate caps
 */
export function getCappedStates(): Array<{ state: string; maxRate: number }> {
  return Object.entries(STATE_RULES)
    .filter(([_, rule]) => !rule.prohibited && rule.maxRate !== undefined)
    .map(([state, rule]) => ({ state, maxRate: rule.maxRate! }));
}

/**
 * Check eligibility for surcharging based on state and card type
 */
export function checkEligibility(
  stateCode: string | null | undefined,
  cardFunding: CardFunding,
  merchantExcludedStates: string[] = [],
  merchantEnabled: boolean = true
): EligibilityResult {
  // Check if merchant has disabled surcharging
  if (!merchantEnabled) {
    return { eligible: false, reason: 'merchant_disabled' };
  }

  // Check card type first - only credit cards are surchargeable
  if (cardFunding === 'debit') {
    return { eligible: false, reason: 'debit_card' };
  }

  if (cardFunding === 'prepaid') {
    return { eligible: false, reason: 'prepaid_card' };
  }

  if (cardFunding === 'unknown') {
    // Conservative approach: don't surcharge if we can't determine card type
    return { eligible: false, reason: 'unknown_card_type' };
  }

  // If no state provided, we allow surcharging (merchant takes responsibility)
  if (!stateCode) {
    return { eligible: true, reason: 'eligible', maxRate: DEFAULT_MAX_RATE };
  }

  const normalizedState = stateCode.toUpperCase();

  // Check if merchant has excluded this state
  if (merchantExcludedStates.map(s => s.toUpperCase()).includes(normalizedState)) {
    return { eligible: false, reason: 'merchant_excluded_state' };
  }

  // Check state rules
  const rule = STATE_RULES[normalizedState];

  if (rule?.prohibited) {
    return { eligible: false, reason: 'state_prohibited' };
  }

  // State is allowed, but may have a cap or special requirements
  const maxRate = rule?.maxRate ?? DEFAULT_MAX_RATE;
  const requiresDualPricing = rule?.requiresDualPricing ?? false;

  if (rule?.maxRate) {
    return {
      eligible: true,
      reason: 'state_capped',
      maxRate,
      requiresDualPricing
    };
  }

  return {
    eligible: true,
    reason: 'eligible',
    maxRate,
    requiresDualPricing
  };
}

/**
 * Calculate the maximum allowed surcharge rate for a given state
 */
export function getMaxSurchargeRate(stateCode: string | null | undefined): number {
  if (!stateCode) return DEFAULT_MAX_RATE;

  const rule = STATE_RULES[stateCode.toUpperCase()];
  if (rule?.prohibited) return 0;

  return rule?.maxRate ?? DEFAULT_MAX_RATE;
}

/**
 * Get human-readable reason for ineligibility
 */
export function getReasonMessage(reason: EligibilityReason): string {
  const messages: Record<EligibilityReason, string> = {
    eligible: 'Transaction is eligible for surcharging',
    state_prohibited: 'Surcharging is prohibited in this state',
    state_capped: 'State has a surcharge rate cap',
    debit_card: 'Surcharging debit cards is prohibited in the US',
    prepaid_card: 'Surcharging prepaid cards is prohibited',
    unknown_card_type: 'Cannot determine card type - surcharge not applied',
    merchant_disabled: 'Merchant has disabled surcharging',
    merchant_excluded_state: 'Merchant has excluded this state from surcharging',
  };
  return messages[reason];
}
