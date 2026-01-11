/**
 * Surcharge Calculation Tests
 */

import { describe, it, expect } from 'vitest';
import { calculateSurcharge, calculateBatchSurcharge } from '../services/surcharge.js';

describe('Surcharge Calculation', () => {
  describe('calculateSurcharge', () => {
    it('should calculate correct surcharge for eligible transaction', () => {
      const result = calculateSurcharge({
        baseAmount: 10000, // $100.00
        merchantSurchargeRate: 0.029, // 2.9%
        billingState: 'TX',
        cardFunding: 'credit',
      });

      expect(result.eligible).toBe(true);
      expect(result.baseAmount).toBe(10000);
      expect(result.surchargeAmount).toBe(290); // $2.90
      expect(result.totalAmount).toBe(10290);
      expect(result.effectiveRate).toBe(0.029);
      expect(result.disclosureText).toContain('2.90%');
    });

    it('should return zero surcharge for ineligible transaction', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029,
        billingState: 'CA', // Prohibited state
        cardFunding: 'credit',
      });

      expect(result.eligible).toBe(false);
      expect(result.surchargeAmount).toBe(0);
      expect(result.totalAmount).toBe(10000);
    });

    it('should cap surcharge at state limit', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029, // 2.9%, but CO max is 2%
        billingState: 'CO',
        cardFunding: 'credit',
      });

      expect(result.eligible).toBe(true);
      expect(result.effectiveRate).toBe(0.02); // Capped at 2%
      expect(result.surchargeAmount).toBe(200); // $2.00
    });

    it('should use merchant rate if lower than cap', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.015, // 1.5%, below CO cap
        billingState: 'CO',
        cardFunding: 'credit',
      });

      expect(result.effectiveRate).toBe(0.015);
      expect(result.surchargeAmount).toBe(150);
    });

    it('should not surcharge debit cards', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029,
        billingState: 'TX',
        cardFunding: 'debit',
      });

      expect(result.eligible).toBe(false);
      expect(result.eligibilityReason).toBe('debit_card');
      expect(result.surchargeAmount).toBe(0);
    });

    it('should round surcharge to nearest cent', () => {
      const result = calculateSurcharge({
        baseAmount: 9999, // Odd amount
        merchantSurchargeRate: 0.029,
        billingState: 'TX',
        cardFunding: 'credit',
      });

      // 9999 * 0.029 = 289.971, rounds to 290
      expect(result.surchargeAmount).toBe(290);
    });

    it('should handle merchant excluded states', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029,
        billingState: 'TX',
        cardFunding: 'credit',
        merchantExcludedStates: ['TX'],
      });

      expect(result.eligible).toBe(false);
      expect(result.eligibilityReason).toBe('merchant_excluded_state');
    });

    it('should handle disabled merchant', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029,
        billingState: 'TX',
        cardFunding: 'credit',
        merchantEnabled: false,
      });

      expect(result.eligible).toBe(false);
      expect(result.eligibilityReason).toBe('merchant_disabled');
    });

    it('should include dual pricing language for NY', () => {
      const result = calculateSurcharge({
        baseAmount: 10000,
        merchantSurchargeRate: 0.029,
        billingState: 'NY',
        cardFunding: 'credit',
      });

      expect(result.eligible).toBe(true);
      expect(result.disclosureText).toContain('cash');
      expect(result.disclosureText).toContain('debit');
    });
  });

  describe('calculateBatchSurcharge', () => {
    it('should calculate surcharge for multiple items', () => {
      const items = [
        { amount: 5000, description: 'Item 1' },
        { amount: 3000, description: 'Item 2' },
        { amount: 2000, description: 'Item 3' },
      ];

      const result = calculateBatchSurcharge(
        items,
        0.029,
        'TX',
        'credit'
      );

      expect(result.eligible).toBe(true);
      expect(result.totalBase).toBe(10000);
      expect(result.totalSurcharge).toBe(290);
      expect(result.grandTotal).toBe(10290);
      expect(result.items).toHaveLength(3);
    });

    it('should return zero surcharge for ineligible batch', () => {
      const items = [
        { amount: 5000 },
        { amount: 5000 },
      ];

      const result = calculateBatchSurcharge(
        items,
        0.029,
        'TX',
        'debit'
      );

      expect(result.eligible).toBe(false);
      expect(result.totalSurcharge).toBe(0);
      expect(result.grandTotal).toBe(10000);
    });
  });
});
