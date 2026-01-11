/**
 * Billing API endpoints
 *
 * Handles success fee billing and invoice management
 */

import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import {
  runMonthlyBilling,
  getMerchantBillingHistory,
  calculateSuccessFees,
  getPreviousMonthPeriod,
} from '../services/billing.js';

// Simple API key auth for admin endpoints
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'swa-admin-key';

export default async function billingRoutes(fastify: FastifyInstance) {
  // Middleware to check admin API key
  const checkAdminAuth = async (request: any, reply: any) => {
    const apiKey = request.headers['x-admin-key'];
    if (apiKey !== ADMIN_API_KEY) {
      return reply.status(401).send({
        error: 'Unauthorized',
        code: 'UNAUTHORIZED',
      });
    }
  };

  // Run monthly billing job (admin only)
  // Call this from a cron job or manually at end of month
  fastify.post(
    '/api/admin/billing/run',
    { preHandler: checkAdminAuth },
    async (request, reply) => {
      try {
        const result = await runMonthlyBilling();

        return reply.send({
          success: true,
          ...result,
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Failed to run billing',
          code: 'BILLING_ERROR',
        });
      }
    }
  );

  // Preview billing without creating invoices (admin only)
  fastify.get(
    '/api/admin/billing/preview',
    { preHandler: checkAdminAuth },
    async (request, reply) => {
      try {
        const period = getPreviousMonthPeriod();
        const summaries = await calculateSuccessFees(period);

        const totalSuccessFees = summaries.reduce(
          (sum, s) => sum + s.successFee,
          0
        );
        const totalSurcharges = summaries.reduce(
          (sum, s) => sum + s.totalSurcharges,
          0
        );

        return reply.send({
          period: {
            start: period.startDate.toISOString(),
            end: period.endDate.toISOString(),
          },
          merchantCount: summaries.length,
          totalSurcharges,
          totalSuccessFees,
          summaries: summaries.map((s) => ({
            ...s,
            successFeeFormatted: `$${(s.successFee / 100).toFixed(2)}`,
            totalSurchargesFormatted: `$${(s.totalSurcharges / 100).toFixed(2)}`,
          })),
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Failed to preview billing',
          code: 'BILLING_ERROR',
        });
      }
    }
  );

  // Get billing history for a merchant
  fastify.get<{ Params: { merchantId: string } }>(
    '/api/merchants/:merchantId/billing',
    async (request, reply) => {
      try {
        const invoices = await getMerchantBillingHistory(
          request.params.merchantId
        );

        return reply.send({
          invoices: invoices.map((inv) => ({
            ...inv,
            successFeeFormatted: `$${(inv.successFee / 100).toFixed(2)}`,
            totalSurchargesFormatted: `$${(inv.totalSurcharges / 100).toFixed(2)}`,
          })),
        });
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Failed to get billing history',
          code: 'BILLING_ERROR',
        });
      }
    }
  );
}
