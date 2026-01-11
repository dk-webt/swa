/**
 * Stripe API wrapper service
 *
 * Handles all interactions with the Stripe API including
 * payment method retrieval, payment intent updates, and webhooks.
 */

import Stripe from 'stripe';
import type { CardFunding } from './compliance.js';

// Initialize Stripe client
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-11-20.acacia',
});

export { stripe };

export interface CardInfo {
  funding: CardFunding;
  brand: string;
  last4: string;
  country: string | null;
}

export interface BillingDetails {
  state: string | null;
  country: string | null;
  postalCode: string | null;
}

/**
 * Retrieve a payment method and extract card info
 */
export async function getPaymentMethodInfo(
  paymentMethodId: string
): Promise<{ card: CardInfo; billing: BillingDetails } | null> {
  try {
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

    if (paymentMethod.type !== 'card' || !paymentMethod.card) {
      return null;
    }

    const card: CardInfo = {
      funding: (paymentMethod.card.funding as CardFunding) || 'unknown',
      brand: paymentMethod.card.brand || 'unknown',
      last4: paymentMethod.card.last4 || '',
      country: paymentMethod.card.country || null,
    };

    const billing: BillingDetails = {
      state: paymentMethod.billing_details?.address?.state || null,
      country: paymentMethod.billing_details?.address?.country || null,
      postalCode: paymentMethod.billing_details?.address?.postal_code || null,
    };

    return { card, billing };
  } catch (error) {
    console.error('Error retrieving payment method:', error);
    throw error;
  }
}

/**
 * Update a PaymentIntent with surcharge amount
 */
export async function updatePaymentIntentAmount(
  paymentIntentId: string,
  newAmount: number,
  metadata?: Record<string, string>
): Promise<Stripe.PaymentIntent> {
  try {
    const updateData: Stripe.PaymentIntentUpdateParams = {
      amount: newAmount,
    };

    if (metadata) {
      updateData.metadata = metadata;
    }

    const paymentIntent = await stripe.paymentIntents.update(
      paymentIntentId,
      updateData
    );

    return paymentIntent;
  } catch (error) {
    console.error('Error updating payment intent:', error);
    throw error;
  }
}

/**
 * Retrieve a PaymentIntent
 */
export async function getPaymentIntent(
  paymentIntentId: string
): Promise<Stripe.PaymentIntent> {
  return stripe.paymentIntents.retrieve(paymentIntentId);
}

/**
 * Create a customer for a merchant (for success fee billing)
 */
export async function createCustomer(
  email: string,
  name: string,
  metadata?: Record<string, string>
): Promise<Stripe.Customer> {
  return stripe.customers.create({
    email,
    name,
    metadata,
  });
}

/**
 * Create a subscription for success fee billing
 */
export async function createMeteringSubscription(
  customerId: string,
  priceId: string
): Promise<Stripe.Subscription> {
  return stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
  });
}

/**
 * Report usage for metered billing
 */
export async function reportUsage(
  subscriptionItemId: string,
  quantity: number,
  timestamp?: number
): Promise<Stripe.UsageRecord> {
  return stripe.subscriptionItems.createUsageRecord(subscriptionItemId, {
    quantity,
    timestamp: timestamp ?? Math.floor(Date.now() / 1000),
    action: 'increment',
  });
}

/**
 * Verify webhook signature
 */
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string,
  endpointSecret: string
): Stripe.Event {
  return stripe.webhooks.constructEvent(payload, signature, endpointSecret);
}

/**
 * Get Stripe account info for connected account
 */
export async function getAccount(accountId: string): Promise<Stripe.Account> {
  return stripe.accounts.retrieve(accountId);
}
