/**
 * Compliance API endpoints
 *
 * Handles compliance-related features including
 * Mastercard notification letter generation
 */

import type { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function complianceRoutes(fastify: FastifyInstance) {
  // Generate Mastercard notification letter
  fastify.get<{ Params: { merchantId: string } }>(
    '/api/merchants/:merchantId/compliance/mastercard-letter',
    async (request: FastifyRequest<{ Params: { merchantId: string } }>, reply: FastifyReply) => {
      try {
        const merchant = await prisma.merchant.findUnique({
          where: { id: request.params.merchantId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        const today = new Date();
        const effectiveDate = new Date(today);
        effectiveDate.setDate(effectiveDate.getDate() + 30);

        const surchargePercent = (Number(merchant.surchargeRate) * 100).toFixed(2);

        // Generate letter content
        const letterContent = generateMastercardLetter({
          merchantId: merchant.stripeAccountId,
          surchargePercent,
          effectiveDate: effectiveDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
          currentDate: today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });

        // Return as HTML that can be printed/saved as PDF
        reply.header('Content-Type', 'text/html');
        return reply.send(letterContent);
      } catch (error) {
        fastify.log.error(error);
        return reply.status(500).send({
          error: 'Internal server error',
          code: 'INTERNAL_ERROR',
        });
      }
    }
  );

  // Mark Mastercard notification as sent
  fastify.post<{ Params: { merchantId: string } }>(
    '/api/merchants/:merchantId/compliance/mastercard-notified',
    async (request: FastifyRequest<{ Params: { merchantId: string } }>, reply: FastifyReply) => {
      try {
        const merchant = await prisma.merchant.update({
          where: { id: request.params.merchantId },
          data: {
            mastercardNotifiedAt: new Date(),
          },
        });

        return reply.send({
          success: true,
          mastercardNotifiedAt: merchant.mastercardNotifiedAt,
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

  // Get compliance checklist status
  fastify.get<{ Params: { merchantId: string } }>(
    '/api/merchants/:merchantId/compliance/status',
    async (request: FastifyRequest<{ Params: { merchantId: string } }>, reply: FastifyReply) => {
      try {
        const merchant = await prisma.merchant.findUnique({
          where: { id: request.params.merchantId },
        });

        if (!merchant) {
          return reply.status(404).send({
            error: 'Merchant not found',
            code: 'MERCHANT_NOT_FOUND',
          });
        }

        const now = new Date();
        const mastercardReady =
          merchant.mastercardNotifiedAt &&
          now.getTime() - new Date(merchant.mastercardNotifiedAt).getTime() >=
            30 * 24 * 60 * 60 * 1000;

        return reply.send({
          checks: [
            {
              id: 'bin_detection',
              name: 'BIN Detection Active',
              status: 'complete',
              description: 'Automatically detecting credit vs debit cards',
            },
            {
              id: 'state_compliance',
              name: 'State Compliance Active',
              status: 'complete',
              description: 'Blocking prohibited states (CA, CT, MA, ME, PR)',
            },
            {
              id: 'rate_cap',
              name: 'Rate Cap Compliance',
              status:
                Number(merchant.surchargeRate) <= 0.03 ? 'complete' : 'warning',
              description:
                Number(merchant.surchargeRate) <= 0.03
                  ? `Rate ${(Number(merchant.surchargeRate) * 100).toFixed(2)}% is within limits`
                  : 'Rate exceeds 3% maximum',
            },
            {
              id: 'mastercard_notification',
              name: 'Mastercard Notification',
              status: mastercardReady
                ? 'complete'
                : merchant.mastercardNotifiedAt
                  ? 'pending'
                  : 'incomplete',
              description: mastercardReady
                ? `Notification sent ${new Date(merchant.mastercardNotifiedAt!).toLocaleDateString()}`
                : merchant.mastercardNotifiedAt
                  ? `Sent ${new Date(merchant.mastercardNotifiedAt).toLocaleDateString()}, waiting 30-day period`
                  : 'Required before surcharging Mastercard transactions',
            },
            {
              id: 'disclosure',
              name: 'Customer Disclosure',
              status: 'complete',
              description: 'Surcharge disclosure shown at checkout',
            },
          ],
          overallStatus: mastercardReady ? 'ready' : 'pending',
          canSurchargeMastercard: mastercardReady,
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

interface LetterParams {
  merchantId: string;
  surchargePercent: string;
  effectiveDate: string;
  currentDate: string;
}

function generateMastercardLetter(params: LetterParams): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mastercard Surcharge Notification</title>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; }
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.6;
      max-width: 8.5in;
      margin: 0 auto;
      padding: 1in;
      color: #000;
    }
    .header {
      margin-bottom: 2em;
    }
    .date {
      margin-bottom: 2em;
    }
    .recipient {
      margin-bottom: 2em;
    }
    .subject {
      font-weight: bold;
      margin-bottom: 1.5em;
    }
    .body p {
      margin-bottom: 1em;
      text-align: justify;
    }
    .signature {
      margin-top: 3em;
    }
    .signature-line {
      border-top: 1px solid #000;
      width: 250px;
      margin-top: 3em;
    }
    .instructions {
      margin-top: 3em;
      padding: 1em;
      background: #f5f5f5;
      border: 1px solid #ddd;
      font-size: 10pt;
    }
    .instructions h3 {
      margin-top: 0;
      color: #333;
    }
    @media print {
      .instructions { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <strong>[YOUR BUSINESS NAME]</strong><br>
    [YOUR BUSINESS ADDRESS]<br>
    [CITY, STATE ZIP]<br>
    [PHONE NUMBER]
  </div>

  <div class="date">${params.currentDate}</div>

  <div class="recipient">
    Mastercard<br>
    Merchant Notification<br>
    P.O. Box 5098<br>
    Hagerstown, MD 21741-5098
  </div>

  <div class="subject">
    RE: Notification of Intent to Surcharge - Merchant ID: ${params.merchantId}
  </div>

  <div class="body">
    <p>Dear Mastercard,</p>

    <p>
      In accordance with Mastercard's surcharging rules, this letter serves as formal
      notification of our intent to implement a credit card surcharge program at our
      establishment.
    </p>

    <p>
      <strong>Merchant Information:</strong><br>
      Merchant ID: ${params.merchantId}<br>
      Surcharge Rate: ${params.surchargePercent}%<br>
      Effective Date: ${params.effectiveDate}
    </p>

    <p>
      We confirm that we will comply with all Mastercard rules regarding surcharging,
      including but not limited to:
    </p>

    <ul>
      <li>The surcharge will not exceed our cost of acceptance or 3%, whichever is lower</li>
      <li>The surcharge will apply equally to all Mastercard credit card products</li>
      <li>The surcharge will not apply to debit cards or prepaid cards</li>
      <li>Clear disclosure of the surcharge will be provided at the point of entry and at the point of sale</li>
      <li>The surcharge amount will be shown as a separate line item on the receipt</li>
      <li>We will not impose a surcharge in any state or territory where prohibited by law</li>
    </ul>

    <p>
      We understand that this notification must be received at least 30 days prior to
      implementing the surcharge program.
    </p>

    <p>
      Please contact us if you require any additional information.
    </p>

    <p>Sincerely,</p>

    <div class="signature">
      <div class="signature-line"></div>
      <p>
        [AUTHORIZED SIGNATURE]<br>
        [PRINTED NAME]<br>
        [TITLE]
      </p>
    </div>
  </div>

  <div class="instructions">
    <h3>Instructions</h3>
    <ol>
      <li>Print this letter on your company letterhead</li>
      <li>Fill in your business information in the header</li>
      <li>Sign the letter</li>
      <li>Send via certified mail or fax to Mastercard at least 30 days before your intended start date</li>
      <li>Keep a copy for your records</li>
      <li>After sending, click "Mark as Sent" in your SWA dashboard to track the 30-day waiting period</li>
    </ol>
    <p><strong>Fax:</strong> 1-636-722-6771</p>
    <p><strong>Note:</strong> You must also notify your acquiring bank. Contact them directly for their notification requirements.</p>
  </div>
</body>
</html>
  `.trim();
}
