/**
 * Compliance Engine Tests
 *
 * Tests for state rules and card type eligibility
 */

import { describe, it, expect } from 'vitest';
import {
  checkEligibility,
  isCardTypeSurchargeable,
  getMaxSurchargeRate,
  getProhibitedStates,
  getCappedStates,
  getReasonMessage,
} from '../services/compliance.js';

describe('Compliance Engine', () => {
  describe('isCardTypeSurchargeable', () => {
    it('should return true for credit cards', () => {
      expect(isCardTypeSurchargeable('credit')).toBe(true);
    });

    it('should return false for debit cards', () => {
      expect(isCardTypeSurchargeable('debit')).toBe(false);
    });

    it('should return false for prepaid cards', () => {
      expect(isCardTypeSurchargeable('prepaid')).toBe(false);
    });

    it('should return false for unknown card types', () => {
      expect(isCardTypeSurchargeable('unknown')).toBe(false);
    });
  });

  describe('getProhibitedStates', () => {
    it('should return all prohibited states', () => {
      const prohibited = getProhibitedStates();
      expect(prohibited).toContain('CT');
      expect(prohibited).toContain('ME');
      expect(prohibited).toContain('MA');
      expect(prohibited).toContain('CA');
      expect(prohibited).toContain('PR');
    });
  });

  describe('getCappedStates', () => {
    it('should return states with rate caps', () => {
      const capped = getCappedStates();
      const colorado = capped.find((s) => s.state === 'CO');
      const montana = capped.find((s) => s.state === 'MT');

      expect(colorado).toBeDefined();
      expect(colorado?.maxRate).toBe(0.02);

      expect(montana).toBeDefined();
      expect(montana?.maxRate).toBe(0.03);
    });
  });

  describe('getMaxSurchargeRate', () => {
    it('should return 0 for prohibited states', () => {
      expect(getMaxSurchargeRate('CA')).toBe(0);
      expect(getMaxSurchargeRate('CT')).toBe(0);
    });

    it('should return 2% for Colorado', () => {
      expect(getMaxSurchargeRate('CO')).toBe(0.02);
    });

    it('should return 3% for Montana', () => {
      expect(getMaxSurchargeRate('MT')).toBe(0.03);
    });

    it('should return 3% default for uncapped states', () => {
      expect(getMaxSurchargeRate('TX')).toBe(0.03);
      expect(getMaxSurchargeRate('FL')).toBe(0.03);
    });

    it('should return 3% for null/undefined state', () => {
      expect(getMaxSurchargeRate(null)).toBe(0.03);
      expect(getMaxSurchargeRate(undefined)).toBe(0.03);
    });
  });

  describe('checkEligibility', () => {
    describe('card type checks', () => {
      it('should reject debit cards', () => {
        const result = checkEligibility('TX', 'debit');
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('debit_card');
      });

      it('should reject prepaid cards', () => {
        const result = checkEligibility('TX', 'prepaid');
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('prepaid_card');
      });

      it('should reject unknown card types', () => {
        const result = checkEligibility('TX', 'unknown');
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('unknown_card_type');
      });

      it('should allow credit cards', () => {
        const result = checkEligibility('TX', 'credit');
        expect(result.eligible).toBe(true);
        expect(result.reason).toBe('eligible');
      });
    });

    describe('state checks', () => {
      it('should reject transactions from prohibited states', () => {
        const states = ['CA', 'CT', 'MA', 'ME', 'PR'];

        for (const state of states) {
          const result = checkEligibility(state, 'credit');
          expect(result.eligible).toBe(false);
          expect(result.reason).toBe('state_prohibited');
        }
      });

      it('should allow transactions from permitted states', () => {
        const states = ['TX', 'FL', 'NY', 'IL', 'WA'];

        for (const state of states) {
          const result = checkEligibility(state, 'credit');
          expect(result.eligible).toBe(true);
        }
      });

      it('should handle lowercase state codes', () => {
        const result = checkEligibility('ca', 'credit');
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('state_prohibited');
      });

      it('should handle null/undefined state', () => {
        const result = checkEligibility(null, 'credit');
        expect(result.eligible).toBe(true);
        expect(result.maxRate).toBe(0.03);
      });
    });

    describe('capped states', () => {
      it('should return cap for Colorado', () => {
        const result = checkEligibility('CO', 'credit');
        expect(result.eligible).toBe(true);
        expect(result.reason).toBe('state_capped');
        expect(result.maxRate).toBe(0.02);
      });

      it('should return cap for Montana', () => {
        const result = checkEligibility('MT', 'credit');
        expect(result.eligible).toBe(true);
        expect(result.reason).toBe('state_capped');
        expect(result.maxRate).toBe(0.03);
      });
    });

    describe('New York dual pricing', () => {
      it('should require dual pricing for NY', () => {
        const result = checkEligibility('NY', 'credit');
        expect(result.eligible).toBe(true);
        expect(result.requiresDualPricing).toBe(true);
      });
    });

    describe('merchant settings', () => {
      it('should reject when merchant is disabled', () => {
        const result = checkEligibility('TX', 'credit', [], false);
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('merchant_disabled');
      });

      it('should reject merchant-excluded states', () => {
        const result = checkEligibility('TX', 'credit', ['TX', 'FL'], true);
        expect(result.eligible).toBe(false);
        expect(result.reason).toBe('merchant_excluded_state');
      });

      it('should allow non-excluded states', () => {
        const result = checkEligibility('WA', 'credit', ['TX', 'FL'], true);
        expect(result.eligible).toBe(true);
      });
    });
  });

  describe('getReasonMessage', () => {
    it('should return appropriate messages for each reason', () => {
      expect(getReasonMessage('eligible')).toContain('eligible');
      expect(getReasonMessage('state_prohibited')).toContain('prohibited');
      expect(getReasonMessage('debit_card')).toContain('debit');
      expect(getReasonMessage('prepaid_card')).toContain('prepaid');
    });
  });
});
