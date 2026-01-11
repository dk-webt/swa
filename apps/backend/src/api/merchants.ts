/**
 * Merchants API endpoints
 *
 * CRUD operations for merchant settings
 */

import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { getProhibitedStates, getCappedStates } from '../services/compliance.js';

const prisma = new PrismaClient();

const CreateMerchantSchema = z.object({
  stripeAccountId: z.string().min(1),
  surchargeRate: z.number().min(0).max(0.03).default(0.029),
  enabled: z.boolean().default(true),
  excludedStates: z.array(z.string().length(2)).default([]),
});

const UpdateMerchantSchema = z.object({
  surchargeRate: z.number().min(0).max(0.03).optional(),
  enabled: z.boolean().optional(),
  excludedStates: z.array(z.string().length(2)).optional(),
  mastercardNotifiedAt: z.string().datetime().optional(),
});

export default async function merchantRoutes(fastify: FastifyInstance) {
  // Get merchant by ID
  fastify.get<{ Params: { id: string } }>(
    '/api/merchants/:id',
    async (request, reply) => {
      try {
        const merchant = await prisma.merchant.findUnique({
          where: { id: request.params.id },
          include: {
            _count: {
              select: { transactions: true },
            },
          },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        return reply.send({
          ...merchant,
          surchargeRate: Number(merchant.surchargeRate),
          transactionCount: merchant._count.transactions,
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

  // Get merchant by Stripe account ID
  fastify.get<{ Params: { stripeAccountId: string } }>(
    '/api/merchants/by-stripe/:stripeAccountId',
    async (request, reply) => {
      try {
        const merchant = await prisma.merchant.findUnique({
          where: { stripeAccountId: request.params.stripeAccountId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        return reply.send({
          ...merchant,
          surchargeRate: Number(merchant.surchargeRate),
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

  // Create merchant
  fastify.post<{ Body: z.infer<typeof CreateMerchantSchema> }>(
    '/api/merchants',
    async (request, reply) => {
      try {
        const input = CreateMerchantSchema.parse(request.body);

        // Check if merchant already exists
        const existing = await prisma.merchant.findUnique({
          where: { stripeAccountId: input.stripeAccountId },
        });

        if (existing) {
          return reply.status(409).send({
            error: 'Merchant already exists',
            code: 'MERCHANT_EXISTS',
            merchantId: existing.id,
          });
        }

        const merchant = await prisma.merchant.create({
          data: {
            stripeAccountId: input.stripeAccountId,
            surchargeRate: input.surchargeRate,
            enabled: input.enabled,
            excludedStates: input.excludedStates,
          },
        });

        return reply.status(201).send({
          ...merchant,
          surchargeRate: Number(merchant.surchargeRate),
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

  // Update merchant
  fastify.patch<{
    Params: { id: string };
    Body: z.infer<typeof UpdateMerchantSchema>;
  }>(
    '/api/merchants/:id',
    async (request, reply) => {
      try {
        const input = UpdateMerchantSchema.parse(request.body);

        const merchant = await prisma.merchant.update({
          where: { id: request.params.id },
          data: {
            ...(input.surchargeRate !== undefined && {
              surchargeRate: input.surchargeRate,
            }),
            ...(input.enabled !== undefined && { enabled: input.enabled }),
            ...(input.excludedStates !== undefined && {
              excludedStates: input.excludedStates,
            }),
            ...(input.mastercardNotifiedAt !== undefined && {
              mastercardNotifiedAt: new Date(input.mastercardNotifiedAt),
            }),
          },
        });

        return reply.send({
          ...merchant,
          surchargeRate: Number(merchant.surchargeRate),
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

  // Get merchant analytics
  fastify.get<{ Params: { id: string } }>(
    '/api/merchants/:id/analytics',
    async (request, reply) => {
      try {
        const merchantId = request.params.id;

        // Get aggregated transaction data
        const [transactionStats, recentTransactions] = await Promise.all([
          prisma.transaction.aggregate({
            where: { merchantId, eligible: true },
            _sum: {
              baseAmount: true,
              surchargeAmount: true,
              totalAmount: true,
            },
            _count: true,
          }),
          prisma.transaction.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' },
            take: 10,
          }),
        ]);

        // Get monthly breakdown
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const monthlyTransactions = await prisma.transaction.groupBy({
          by: ['eligible'],
          where: {
            merchantId,
            createdAt: { gte: thirtyDaysAgo },
          },
          _sum: {
            surchargeAmount: true,
          },
          _count: true,
        });

        return reply.send({
          totalTransactions: transactionStats._count,
          totalBaseAmount: transactionStats._sum.baseAmount ?? 0,
          totalSurcharges: transactionStats._sum.surchargeAmount ?? 0,
          totalAmount: transactionStats._sum.totalAmount ?? 0,
          last30Days: {
            eligible: monthlyTransactions.find((t: { eligible: boolean }) => t.eligible)?._count ?? 0,
            ineligible: monthlyTransactions.find((t: { eligible: boolean }) => !t.eligible)?._count ?? 0,
            surchargeAmount:
              monthlyTransactions.find((t: { eligible: boolean }) => t.eligible)?._sum.surchargeAmount ?? 0,
          },
          recentTransactions,
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

  // Get compliance info
  fastify.get('/api/compliance/states', async (_request, reply) => {
    return reply.send({
      prohibitedStates: getProhibitedStates(),
      cappedStates: getCappedStates(),
    });
  });
}
