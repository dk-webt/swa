# SWA Integration Guide

This guide explains how to integrate SWA (Surcharge With Automation) into your checkout flow to automatically apply compliant credit card surcharges.

## Overview

SWA helps you pass credit card processing fees to customers while staying compliant with:
- Card network rules (Visa, Mastercard, etc.)
- State laws (automatic blocking of prohibited states)
- Debit card regulations (never surcharges debit or prepaid cards)

## Prerequisites

1. Install the SWA app from the Stripe App Marketplace
2. Configure your surcharge settings in the Stripe Dashboard
3. Get your Merchant ID from the SWA settings page

## Integration Options

### Option 1: Server-Side Integration (Recommended)

Add surcharge calculation to your payment flow before creating the PaymentIntent.

```typescript
// 1. After collecting billing info, check eligibility
const eligibilityResponse = await fetch(
  'https://swa-backend.up.railway.app/api/check-eligibility/simple',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      merchantId: 'your-merchant-id',
      billingState: customer.billingAddress.state, // e.g., 'TX'
      cardFunding: 'credit', // or get from Stripe PaymentMethod
    }),
  }
);

const eligibility = await eligibilityResponse.json();

// 2. If eligible, calculate surcharge
if (eligibility.eligible) {
  const surchargeResponse = await fetch(
    'https://swa-backend.up.railway.app/api/calculate-surcharge/quick',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 10000, // $100.00 in cents
        merchantId: 'your-merchant-id',
        billingState: customer.billingAddress.state,
        cardFunding: 'credit',
      }),
    }
  );

  const surcharge = await surchargeResponse.json();

  // 3. Display disclosure to customer
  console.log(surcharge.disclosureText);
  // "A 2.90% surcharge ($2.90) will be added for credit card payments."

  // 4. Create PaymentIntent with adjusted amount and metadata
  const paymentIntent = await stripe.paymentIntents.create({
    amount: surcharge.totalAmount, // 10290 ($102.90)
    currency: 'usd',
    metadata: {
      swa_merchant_id: 'your-merchant-id',
      swa_base_amount: String(surcharge.baseAmount),
      swa_surcharge_amount: String(surcharge.surchargeAmount),
      swa_eligible: 'true',
      swa_reason: 'eligible',
    },
  });
}
```

### Option 2: Client-Side with PaymentMethod Lookup

When you already have a PaymentMethod ID (after customer enters card):

```typescript
// On your server, after customer submits card
const response = await fetch(
  'https://swa-backend.up.railway.app/api/calculate-surcharge',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: 10000,
      merchantId: 'your-merchant-id',
      paymentMethodId: 'pm_xxxxx', // From Stripe Elements
      // billingState is auto-detected from PaymentMethod
    }),
  }
);

const result = await response.json();

if (result.eligible) {
  // Show surcharge disclosure and update PaymentIntent amount
  await stripe.paymentIntents.update(paymentIntentId, {
    amount: result.totalAmount,
    metadata: {
      swa_merchant_id: 'your-merchant-id',
      swa_base_amount: String(result.baseAmount),
      swa_surcharge_amount: String(result.surchargeAmount),
      swa_eligible: 'true',
    },
  });
}
```

## API Reference

### POST /api/check-eligibility/simple

Check if a transaction is eligible for surcharging without Stripe API lookup.

**Request:**
```json
{
  "merchantId": "uuid",
  "billingState": "TX",
  "cardFunding": "credit" // credit | debit | prepaid | unknown
}
```

**Response:**
```json
{
  "eligible": true,
  "reason": "eligible",
  "reasonMessage": "Transaction is eligible for surcharging",
  "maxRate": 0.03,
  "requiresDualPricing": false
}
```

### POST /api/calculate-surcharge/quick

Calculate surcharge amount without Stripe API lookup.

**Request:**
```json
{
  "amount": 10000,
  "merchantId": "uuid",
  "billingState": "TX",
  "cardFunding": "credit"
}
```

**Response:**
```json
{
  "eligible": true,
  "eligibilityReason": "eligible",
  "baseAmount": 10000,
  "surchargeAmount": 290,
  "totalAmount": 10290,
  "effectiveRate": 0.029,
  "disclosureText": "A 2.90% surcharge ($2.90) will be added for credit card payments.",
  "cardFunding": "credit",
  "billingState": "TX",
  "merchantRate": 0.029
}
```

### POST /api/calculate-surcharge

Calculate surcharge with automatic card type detection from Stripe.

**Request:**
```json
{
  "amount": 10000,
  "merchantId": "uuid",
  "paymentMethodId": "pm_xxxxx"
}
```

### GET /api/compliance/states

Get list of prohibited and capped states.

**Response:**
```json
{
  "prohibitedStates": ["CA", "CT", "MA", "ME", "PR"],
  "cappedStates": [
    { "state": "CO", "maxRate": 0.02 },
    { "state": "MT", "maxRate": 0.03 }
  ]
}
```

## Required Metadata

For SWA to track transactions correctly, include these metadata fields on your PaymentIntent:

| Field | Description |
|-------|-------------|
| `swa_merchant_id` | Your SWA merchant ID |
| `swa_base_amount` | Original amount before surcharge (cents) |
| `swa_surcharge_amount` | Surcharge amount (cents) |
| `swa_eligible` | "true" or "false" |
| `swa_reason` | Eligibility reason code |

## Compliance Checklist

Before going live, ensure:

- [ ] Surcharge disclosures are displayed before payment confirmation
- [ ] Debit cards are never surcharged (SWA handles this automatically)
- [ ] Prohibited states are blocked (SWA handles this automatically)
- [ ] Mastercard 30-day notification has been sent (generate from Dashboard)
- [ ] Signage/website notices are in place per card network rules

## Testing

Use Stripe test mode with these test cards:

| Card Number | Card Type |
|-------------|-----------|
| 4242424242424242 | Credit (Visa) |
| 4000056655665556 | Debit (Visa) |
| 5200828282828210 | Prepaid (Mastercard) |

## Support

- Documentation: https://docs.swa.dev
- Email: support@swa.dev
- Stripe Dashboard: View analytics in the SWA app
