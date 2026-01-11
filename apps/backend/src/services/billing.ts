/**
 * Success Fee Billing Service
 *
 * Handles calculation and invoicing of success fees
 * charged to merchants based on surcharges collected.
 */

import { PrismaClient } from '@prisma/client';
import { stripe } from './stripe.js';

const prisma = new PrismaClient();

// Success fee rate (0.25% of surcharges collected)
const SUCCESS_FEE_RATE = 0.0025;

export interface BillingPeriod {
  startDate: Date;
  endDate: Date;
}

export interface MerchantBillingSummary {
  merchantId: string;
  stripeAccountId: string;
  periodStart: Date;
  periodEnd: Date;
  totalSurcharges: number;
  transactionCount: number;
  successFee: number;
}

/**
 * Get the billing period for the previous month
 */
export function getPreviousMonthPeriod(): BillingPeriod {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
  return { startDate, endDate };
}

/**
 * Calculate success fees for all merchants for a billing period
 */
export async function calculateSuccessFees(
  period: BillingPeriod
): Promise<MerchantBillingSummary[]> {
  // Get all merchants with transactions in the period
  const merchants = await prisma.merchant.findMany({
    where: {
      enabled: true,
    },
    include: {
      transactions: {
        where: {
          createdAt: {
            gte: period.startDate,
            lte: period.endDate,
          },
          eligible: true,
          surchargeAmount: { gt: 0 },
        },
      },
    },
  });

  const summaries: MerchantBillingSummary[] = [];

  for (const merchant of merchants) {
    const totalSurcharges = merchant.transactions.reduce(
      (sum, tx) => sum + tx.surchargeAmount,
      0
    );

    if (totalSurcharges === 0) continue;

    const successFee = Math.round(totalSurcharges * SUCCESS_FEE_RATE);

    summaries.push({
      merchantId: merchant.id,
      stripeAccountId: merchant.stripeAccountId,
      periodStart: period.startDate,
      periodEnd: period.endDate,
      totalSurcharges,
      transactionCount: merchant.transactions.length,
      successFee,
    });
  }

  return summaries;
}

/**
 * Create an invoice for a merchant's success fee
 */
export async function createSuccessFeeInvoice(
  summary: MerchantBillingSummary
): Promise<string | null> {
  try {
    // Check if invoice already exists for this period
    const existingInvoice = await prisma.invoice.findFirst({
      where: {
        merchantId: summary.merchantId,
        periodStart: summary.periodStart,
        periodEnd: summary.periodEnd,
      },
    });

    if (existingInvoice) {
      console.log(
        `Invoice already exists for merchant ${summary.merchantId} for period`
      );
      return existingInvoice.stripeInvoiceId;
    }

    // Get or create Stripe customer for merchant
    const merchant = await prisma.merchant.findUnique({
      where: { id: summary.merchantId },
    });

    if (!merchant) {
      throw new Error(`Merchant ${summary.merchantId} not found`);
    }

    let stripeCustomerId = merchant.stripeCustomerId;

    if (!stripeCustomerId) {
      // Create Stripe customer for billing
      const customer = await stripe.customers.create({
        metadata: {
          swa_merchant_id: merchant.id,
          stripe_account_id: merchant.stripeAccountId,
        },
      });

      stripeCustomerId = customer.id;

      await prisma.merchant.update({
        where: { id: merchant.id },
        data: { stripeCustomerId },
      });
    }

    // Format period for invoice description
    const periodStr = `${summary.periodStart.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })}`;

    // Create invoice
    const invoice = await stripe.invoices.create({
      customer: stripeCustomerId,
      collection_method: 'send_invoice',
      days_until_due: 30,
      description: `SWA Success Fee - ${periodStr}`,
      metadata: {
        swa_merchant_id: summary.merchantId,
        period_start: summary.periodStart.toISOString(),
        period_end: summary.periodEnd.toISOString(),
      },
    });

    // Add invoice line item
    await stripe.invoiceItems.create({
      customer: stripeCustomerId,
      invoice: invoice.id,
      amount: summary.successFee,
      currency: 'usd',
      description: `Success fee on $${(summary.totalSurcharges / 100).toFixed(2)} surcharges collected (${summary.transactionCount} transactions)`,
    });

    // Finalize and send invoice
    await stripe.invoices.finalizeInvoice(invoice.id);
    await stripe.invoices.sendInvoice(invoice.id);

    // Record in database
    await prisma.invoice.create({
      data: {
        merchantId: summary.merchantId,
        periodStart: summary.periodStart,
        periodEnd: summary.periodEnd,
        totalSurcharges: summary.totalSurcharges,
        successFee: summary.successFee,
        stripeInvoiceId: invoice.id,
        status: 'sent',
      },
    });

    return invoice.id;
  } catch (error) {
    console.error(
      `Failed to create invoice for merchant ${summary.merchantId}:`,
      error
    );
    return null;
  }
}

/**
 * Run monthly billing job for all merchants
 */
export async function runMonthlyBilling(): Promise<{
  processed: number;
  invoicesCreated: number;
  errors: number;
}> {
  const period = getPreviousMonthPeriod();
  const summaries = await calculateSuccessFees(period);

  let invoicesCreated = 0;
  let errors = 0;

  for (const summary of summaries) {
    // Skip if success fee is too small (less than $1)
    if (summary.successFee < 100) {
      console.log(
        `Skipping merchant ${summary.merchantId}: success fee $${(summary.successFee / 100).toFixed(2)} is below minimum`
      );
      continue;
    }

    const invoiceId = await createSuccessFeeInvoice(summary);
    if (invoiceId) {
      invoicesCreated++;
    } else {
      errors++;
    }
  }

  return {
    processed: summaries.length,
    invoicesCreated,
    errors,
  };
}

/**
 * Get billing history for a merchant
 */
export async function getMerchantBillingHistory(merchantId: string) {
  return prisma.invoice.findMany({
    where: { merchantId },
    orderBy: { periodEnd: 'desc' },
  });
}

/**
 * Update invoice status from webhook
 */
export async function updateInvoiceStatus(
  stripeInvoiceId: string,
  status: 'paid' | 'void' | 'uncollectible'
) {
  return prisma.invoice.updateMany({
    where: { stripeInvoiceId },
    data: { status },
  });
}
