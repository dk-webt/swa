/**
 * SWA Backend API Server
 *
 * Main entry point for the Fastify server
 */

import Fastify from 'fastify';
import cors from '@fastify/cors';
import eligibilityRoutes from './api/eligibility.js';
import calculateRoutes from './api/calculate.js';
import merchantRoutes from './api/merchants.js';
import webhookRoutes from './api/webhooks.js';

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL ?? 'info',
    transport:
      process.env.NODE_ENV === 'development'
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : undefined,
  },
});

// Register CORS
await fastify.register(cors, {
  origin: process.env.CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Merchant-Id'],
});

// Health check endpoint
fastify.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// API info endpoint
fastify.get('/', async () => {
  return {
    name: 'SWA API',
    version: '0.1.0',
    description: 'Surcharge With Automation - Credit Card Fee Passing',
    endpoints: {
      health: 'GET /health',
      eligibility: 'POST /api/check-eligibility',
      eligibilitySimple: 'POST /api/check-eligibility/simple',
      calculate: 'POST /api/calculate-surcharge',
      calculateQuick: 'POST /api/calculate-surcharge/quick',
      merchants: 'GET/POST /api/merchants',
      merchantById: 'GET/PATCH /api/merchants/:id',
      merchantAnalytics: 'GET /api/merchants/:id/analytics',
      complianceStates: 'GET /api/compliance/states',
      webhooks: 'POST /api/webhooks/stripe',
    },
  };
});

// Register routes
await fastify.register(eligibilityRoutes);
await fastify.register(calculateRoutes);
await fastify.register(merchantRoutes);
await fastify.register(webhookRoutes);

// Start server
const start = async () => {
  try {
    const port = parseInt(process.env.PORT ?? '3000', 10);
    const host = process.env.HOST ?? '0.0.0.0';

    await fastify.listen({ port, host });
    fastify.log.info(`Server listening on ${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

export default fastify;
