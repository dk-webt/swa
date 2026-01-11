/**
 * Eligibility API endpoint
 *
 * POST /api/check-eligibility
 * Checks if a transaction is eligible for surcharging
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { getPaymentMethodInfo } from '../services/stripe.js';
import {
  checkEligibility,
  getReasonMessage,
  type CardFunding,
} from '../services/compliance.js';

const prisma = new PrismaClient();

const CheckEligibilitySchema = z.object({
  paymentMethodId: z.string().min(1),
  merchantId: z.string().uuid(),
  billingState: z.string().length(2).optional().nullable(),
});

type CheckEligibilityInput = z.infer<typeof CheckEligibilitySchema>;

interface CheckEligibilityResponse {
  eligible: boolean;
  reason: string;
  reasonMessage: string;
  cardType: CardFunding;
  billingState: string | null;
  maxRate: number | null;
  requiresDualPricing: boolean;
}

export default async function eligibilityRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: CheckEligibilityInput }>(
    '/api/check-eligibility',
    async (request: FastifyRequest<{ Body: CheckEligibilityInput }>, reply: FastifyReply) => {
      try {
        // Validate input
        const input = CheckEligibilitySchema.parse(request.body);

        // Get merchant settings
        const merchant = await prisma.merchant.findUnique({
          where: { id: input.merchantId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        // Get payment method info from Stripe
        const paymentMethodInfo = await getPaymentMethodInfo(input.paymentMethodId);

        if (!paymentMethodInfo) {
          return reply.status(400).send({
            error: 'Invalid payment method or not a card',
            code: 'INVALID_PAYMENT_METHOD',
          });
        }

        const { card, billing } = paymentMethodInfo;

        // Use provided billing state or fall back to payment method's billing address
        const billingState = input.billingState ?? billing.state;

        // Check eligibility
        const eligibility = checkEligibility(
          billingState,
          card.funding,
          merchant.excludedStates,
          merchant.enabled
        );

        const response: CheckEligibilityResponse = {
          eligible: eligibility.eligible,
          reason: eligibility.reason,
          reasonMessage: getReasonMessage(eligibility.reason),
          cardType: card.funding,
          billingState,
          maxRate: eligibility.maxRate ?? null,
          requiresDualPricing: eligibility.requiresDualPricing ?? false,
        };

        return reply.send(response);
      } catch (error) {
        if (error instanceof z.ZodError) {
          return reply.status(400).send({
            error: 'Validation error',
            code: 'VALIDATION_ERROR',
            details: error.errors,
          });
        }

        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        });
      }
    }
  );

  // Simple eligibility check without Stripe lookup
  // Useful for client-side checks when card type is already known
  fastify.post<{
    Body: {
      merchantId: string;
      billingState: string | null;
      cardFunding: CardFunding;
    };
  }>(
    '/api/check-eligibility/simple',
    async (request, reply) => {
      try {
        const { merchantId, billingState, cardFunding } = request.body;

        const merchant = await prisma.merchant.findUnique({
          where: { id: merchantId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        const eligibility = checkEligibility(
          billingState,
          cardFunding,
          merchant.excludedStates,
          merchant.enabled
        );

        return reply.send({
          eligible: eligibility.eligible,
          reason: eligibility.reason,
          reasonMessage: getReasonMessage(eligibility.reason),
          maxRate: eligibility.maxRate ?? null,
          requiresDualPricing: eligibility.requiresDualPricing ?? false,
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        });
      }
    }
  );
}
