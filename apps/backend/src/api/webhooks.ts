/**
 * Stripe Webhook handlers
 *
 * POST /api/webhooks/stripe
 * Handles Stripe webhook events for tracking transactions
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { constructWebhookEvent, stripe } from '../services/stripe.js';
import type { CardFunding } from '../services/compliance.js';

const prisma = new PrismaClient();

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? '';

export default async function webhookRoutes(fastify: FastifyInstance) {
  // Need to get raw body for webhook signature verification
  fastify.addContentTypeParser(
    'application/json',
    { parseAs: 'buffer' },
    (_req, body, done) => {
      done(null, body);
    }
  );

  fastify.post('/api/webhooks/stripe', async (request: FastifyRequest, reply: FastifyReply) => {
    const signature = request.headers['stripe-signature'];

    if (!signature || typeof signature !== 'string') {
      return reply.status(400).send({ error: 'Missing stripe-signature header' });
    }

    let event: Stripe.Event;

    try {
      event = constructWebhookEvent(
        request.body as Buffer,
        signature,
        WEBHOOK_SECRET
      );
    } catch (error) {
      fastify.log.error({ err: error }, 'Webhook signature verification failed');
      return reply.status(400).send({ error: 'Webhook signature verification failed' });
    }

    fastify.log.info(`Received webhook event: ${event.type}`);

    try {
      switch (event.type) {
        case 'payment_intent.succeeded':
          await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
          break;

        case 'payment_intent.payment_failed':
          await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
          break;

        case 'account.application.authorized':
          await handleAppAuthorized(event.data.object as Stripe.Application);
          break;

        case 'account.application.deauthorized':
          await handleAppDeauthorized(event.data.object as Stripe.Application);
          break;

        default:
          fastify.log.info(`Unhandled event type: ${event.type}`);
      }
    } catch (error) {
      fastify.log.error({ err: error, eventType: event.type }, 'Error handling webhook');
      // Still return 200 to prevent Stripe from retrying
      // Log the error for investigation
    }

    return reply.send({ received: true });
  });
}

/**
 * Handle successful payment - record transaction for analytics
 */
async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  // Check if this payment has SWA metadata
  const metadata = paymentIntent.metadata ?? {};
  const swaMerchantId = metadata.swa_merchant_id;
  const swaBaseAmount = metadata.swa_base_amount;
  const swaSurchargeAmount = metadata.swa_surcharge_amount;

  if (!swaMerchantId) {
    // Not a SWA-processed payment
    return;
  }

  // Get card info from the payment method
  let cardFunding: CardFunding = 'unknown';
  let billingState: string | null = null;

  if (paymentIntent.payment_method && typeof paymentIntent.payment_method === 'string') {
    try {
      const paymentMethod = await stripe.paymentMethods.retrieve(
        paymentIntent.payment_method
      );

      if (paymentMethod.card) {
        cardFunding = (paymentMethod.card.funding as CardFunding) || 'unknown';
      }

      if (paymentMethod.billing_details?.address?.state) {
        billingState = paymentMethod.billing_details.address.state;
      }
    } catch (error) {
      console.error('Error retrieving payment method:', error);
    }
  }

  const baseAmount = parseInt(swaBaseAmount ?? '0', 10);
  const surchargeAmount = parseInt(swaSurchargeAmount ?? '0', 10);

  // Record the transaction
  await prisma.transaction.create({
    data: {
      merchantId: swaMerchantId,
      stripePaymentIntentId: paymentIntent.id,
      baseAmount,
      surchargeAmount,
      totalAmount: paymentIntent.amount,
      cardFunding,
      billingState,
      eligible: surchargeAmount > 0,
      reason: surchargeAmount > 0 ? 'eligible' : metadata.swa_ineligible_reason,
    },
  });
}

/**
 * Handle failed payment - could be used for analytics
 */
async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  // Log failed payments for debugging
  const swaMerchantId = paymentIntent.metadata?.swa_merchant_id;

  if (swaMerchantId) {
    console.log(`SWA payment failed for merchant ${swaMerchantId}:`, {
      paymentIntentId: paymentIntent.id,
      error: paymentIntent.last_payment_error?.message,
    });
  }
}

/**
 * Handle app authorization - create merchant record
 */
async function handleAppAuthorized(application: Stripe.Application) {
  // This is called when a Stripe user installs the app
  // The account ID would be in the connected account context
  console.log('App authorized:', application.id);

  // In a real implementation, you'd get the account ID from the Connect context
  // and create a merchant record
}

/**
 * Handle app deauthorization - disable merchant
 */
async function handleAppDeauthorized(application: Stripe.Application) {
  console.log('App deauthorized:', application.id);

  // Disable the merchant but don't delete data (for billing reconciliation)
}
