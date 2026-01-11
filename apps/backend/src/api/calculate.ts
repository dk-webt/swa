/**
 * Surcharge Calculation API endpoint
 *
 * POST /api/calculate-surcharge
 * Calculates the surcharge amount for a transaction
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { getPaymentMethodInfo } from '../services/stripe.js';
import { calculateSurcharge, type SurchargeCalculationResult } from '../services/surcharge.js';
import type { CardFunding } from '../services/compliance.js';

const prisma = new PrismaClient();

const CalculateSurchargeSchema = z.object({
  amount: z.number().int().positive(),
  merchantId: z.string().uuid(),
  paymentMethodId: z.string().optional(),
  billingState: z.string().length(2).optional().nullable(),
  cardFunding: z.enum(['credit', 'debit', 'prepaid', 'unknown']).optional(),
});

type CalculateSurchargeInput = z.infer<typeof CalculateSurchargeSchema>;

export default async function calculateRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: CalculateSurchargeInput }>(
    '/api/calculate-surcharge',
    async (request: FastifyRequest<{ Body: CalculateSurchargeInput }>, reply: FastifyReply) => {
      try {
        // Validate input
        const input = CalculateSurchargeSchema.parse(request.body);

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

        let billingState = input.billingState ?? null;
        let cardFunding: CardFunding = input.cardFunding ?? 'unknown';

        // If paymentMethodId provided, fetch card details from Stripe
        if (input.paymentMethodId) {
          const paymentMethodInfo = await getPaymentMethodInfo(input.paymentMethodId);

          if (paymentMethodInfo) {
            cardFunding = paymentMethodInfo.card.funding;
            // Use Stripe billing state if not explicitly provided
            if (!input.billingState) {
              billingState = paymentMethodInfo.billing.state;
            }
          }
        }

        // Calculate surcharge
        const result = calculateSurcharge({
          baseAmount: input.amount,
          merchantSurchargeRate: Number(merchant.surchargeRate),
          billingState,
          cardFunding,
          merchantExcludedStates: merchant.excludedStates,
          merchantEnabled: merchant.enabled,
        });

        return reply.send({
          ...result,
          cardFunding,
          billingState,
          merchantRate: Number(merchant.surchargeRate),
        });
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

  // Quick calculation without Stripe lookup
  // For when card type is already known client-side
  fastify.post<{
    Body: {
      amount: number;
      merchantId: string;
      billingState: string | null;
      cardFunding: CardFunding;
    };
  }>(
    '/api/calculate-surcharge/quick',
    async (request, reply) => {
      try {
        const { amount, merchantId, billingState, cardFunding } = request.body;

        const merchant = await prisma.merchant.findUnique({
          where: { id: merchantId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        const result = calculateSurcharge({
          baseAmount: amount,
          merchantSurchargeRate: Number(merchant.surchargeRate),
          billingState,
          cardFunding,
          merchantExcludedStates: merchant.excludedStates,
          merchantEnabled: merchant.enabled,
        });

        return reply.send({
          ...result,
          cardFunding,
          billingState,
          merchantRate: Number(merchant.surchargeRate),
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
