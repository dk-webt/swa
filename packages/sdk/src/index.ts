/**
 * SWA SDK
 *
 * Drop-in SDK for integrating credit card surcharging
 * with Stripe Elements checkout flows.
 */

export interface SWAConfig {
  merchantId: string;
  apiUrl?: string;
  onSurchargeCalculated?: (result: SurchargeResult) => void;
  onError?: (error: Error) => void;
}

export interface SurchargeResult {
  eligible: boolean;
  eligibilityReason: string;
  baseAmount: number;
  surchargeAmount: number;
  totalAmount: number;
  effectiveRate: number;
  disclosureText: string;
  cardFunding: CardFunding;
  billingState: string | null;
}

export type CardFunding = 'credit' | 'debit' | 'prepaid' | 'unknown';

export interface CalculateParams {
  amount: number;
  paymentMethodId?: string;
  billingState?: string | null;
  cardFunding?: CardFunding;
}

const DEFAULT_API_URL = 'https://backend-production-5e37.up.railway.app';

/**
 * Main SWA SDK class
 *
 * @example
 * ```typescript
 * import { SWA } from '@swa/sdk';
 *
 * const swa = new SWA({
 *   merchantId: 'your-merchant-id',
 *   onSurchargeCalculated: (result) => {
 *     console.log('Surcharge:', result.surchargeAmount);
 *   }
 * });
 *
 * // Calculate surcharge for a payment
 * const result = await swa.calculate({
 *   amount: 10000, // $100.00 in cents
 *   cardFunding: 'credit',
 *   billingState: 'TX'
 * });
 * ```
 */
export class SWA {
  private merchantId: string;
  private apiUrl: string;
  private onSurchargeCalculated?: (result: SurchargeResult) => void;
  private onError?: (error: Error) => void;

  constructor(config: SWAConfig) {
    this.merchantId = config.merchantId;
    this.apiUrl = config.apiUrl || DEFAULT_API_URL;
    this.onSurchargeCalculated = config.onSurchargeCalculated;
    this.onError = config.onError;
  }

  /**
   * Calculate surcharge for a transaction
   *
   * @param params - Calculation parameters
   * @returns Surcharge calculation result
   */
  async calculate(params: CalculateParams): Promise<SurchargeResult> {
    try {
      const response = await fetch(`${this.apiUrl}/api/calculate-surcharge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: params.amount,
          merchantId: this.merchantId,
          paymentMethodId: params.paymentMethodId,
          billingState: params.billingState,
          cardFunding: params.cardFunding,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to calculate surcharge');
      }

      const result: SurchargeResult = await response.json();

      if (this.onSurchargeCalculated) {
        this.onSurchargeCalculated(result);
      }

      return result;
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      if (this.onError) {
        this.onError(err);
      }
      throw err;
    }
  }

  /**
   * Quick calculate - use when you already know card type
   * Skips Stripe API lookup for faster response
   */
  async quickCalculate(params: {
    amount: number;
    cardFunding: CardFunding;
    billingState: string | null;
  }): Promise<SurchargeResult> {
    try {
      const response = await fetch(
        `${this.apiUrl}/api/calculate-surcharge/quick`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: params.amount,
            merchantId: this.merchantId,
            billingState: params.billingState,
            cardFunding: params.cardFunding,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to calculate surcharge');
      }

      const result: SurchargeResult = await response.json();

      if (this.onSurchargeCalculated) {
        this.onSurchargeCalculated(result);
      }

      return result;
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      if (this.onError) {
        this.onError(err);
      }
      throw err;
    }
  }

  /**
   * Check eligibility without calculating surcharge
   */
  async checkEligibility(params: {
    paymentMethodId: string;
  }): Promise<{
    eligible: boolean;
    reason: string;
    cardFunding: CardFunding;
    billingState: string | null;
  }> {
    try {
      const response = await fetch(`${this.apiUrl}/api/check-eligibility`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          merchantId: this.merchantId,
          paymentMethodId: params.paymentMethodId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to check eligibility');
      }

      return response.json();
    } catch (error) {
      const err = error instanceof Error ? error : new Error('Unknown error');
      if (this.onError) {
        this.onError(err);
      }
      throw err;
    }
  }

  /**
   * Get list of states where surcharging is prohibited or capped
   */
  async getComplianceStates(): Promise<{
    prohibitedStates: string[];
    cappedStates: Array<{ state: string; maxRate: number }>;
  }> {
    const response = await fetch(`${this.apiUrl}/api/compliance/states`);
    if (!response.ok) {
      throw new Error('Failed to fetch compliance states');
    }
    return response.json();
  }

  /**
   * Format surcharge amount as currency string
   */
  formatCurrency(cents: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(cents / 100);
  }

  /**
   * Generate disclosure HTML element
   * Use this to display the surcharge notice to customers
   */
  createDisclosureElement(result: SurchargeResult): HTMLDivElement {
    const div = document.createElement('div');
    div.className = 'swa-disclosure';
    div.setAttribute('role', 'alert');
    div.setAttribute('aria-live', 'polite');

    if (result.eligible && result.surchargeAmount > 0) {
      div.innerHTML = `
        <div class="swa-disclosure-content">
          <p class="swa-disclosure-text">${result.disclosureText}</p>
          <div class="swa-disclosure-breakdown">
            <span class="swa-disclosure-label">Subtotal:</span>
            <span class="swa-disclosure-value">${this.formatCurrency(result.baseAmount)}</span>
          </div>
          <div class="swa-disclosure-breakdown">
            <span class="swa-disclosure-label">Surcharge (${(result.effectiveRate * 100).toFixed(2)}%):</span>
            <span class="swa-disclosure-value">${this.formatCurrency(result.surchargeAmount)}</span>
          </div>
          <div class="swa-disclosure-breakdown swa-disclosure-total">
            <span class="swa-disclosure-label">Total:</span>
            <span class="swa-disclosure-value">${this.formatCurrency(result.totalAmount)}</span>
          </div>
        </div>
      `;
    }

    return div;
  }

  /**
   * Get default CSS styles for the disclosure element
   */
  static getDefaultStyles(): string {
    return `
      .swa-disclosure {
        padding: 16px;
        margin: 16px 0;
        background-color: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .swa-disclosure-text {
        margin: 0 0 12px 0;
        font-size: 14px;
        color: #495057;
      }

      .swa-disclosure-breakdown {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        font-size: 14px;
      }

      .swa-disclosure-label {
        color: #6c757d;
      }

      .swa-disclosure-value {
        font-weight: 500;
        color: #212529;
      }

      .swa-disclosure-total {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px solid #dee2e6;
        font-weight: 600;
      }

      .swa-disclosure-total .swa-disclosure-value {
        font-size: 16px;
      }
    `;
  }

  /**
   * Inject default styles into the document head
   */
  static injectStyles(): void {
    if (document.getElementById('swa-styles')) return;

    const style = document.createElement('style');
    style.id = 'swa-styles';
    style.textContent = SWA.getDefaultStyles();
    document.head.appendChild(style);
  }
}

// Default export
export default SWA;
