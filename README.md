# SWA - Surcharge With Automation

A Stripe App that enables merchants to legally pass credit card processing fees to customers with full compliance automation.

## Features

- **BIN Detection**: Automatically identifies credit vs debit/prepaid cards using Stripe's API
- **State Compliance**: Blocks surcharging in prohibited states (CA, CT, MA, ME, PR)
- **Rate Caps**: Enforces state-specific caps (CO: 2%, MT: 3%)
- **Dual Pricing**: Generates appropriate disclosures for NY
- **Analytics**: Track surcharges collected and savings

## Project Structure

```
swa/
├── apps/
│   ├── backend/          # Node.js/Fastify API service
│   └── stripe-app/       # Stripe Dashboard UI extension
├── packages/
│   └── sdk/              # JavaScript SDK for merchants (coming soon)
├── docs/
│   └── integration.md    # Integration guide
└── .github/
    └── workflows/        # CI/CD pipelines
```

## Quick Start

### Prerequisites

- Node.js 22+
- pnpm 9+
- PostgreSQL database
- Stripe account with CLI installed

### Development Setup

```bash
# Clone the repo
git clone https://github.com/your-org/swa.git
cd swa

# Install dependencies
pnpm install

# Set up environment variables
cp apps/backend/.env.example apps/backend/.env
# Edit .env with your Stripe keys and database URL

# Generate Prisma client
pnpm --filter @swa/backend run db:generate

# Push database schema
pnpm --filter @swa/backend run db:push

# Start development servers
pnpm dev
```

### Running Tests

```bash
pnpm --filter @swa/backend test
```

### Running Stripe App Locally

```bash
cd apps/stripe-app
stripe apps start
```

## Deployment

### Backend (Railway)

1. Create a Railway project
2. Add PostgreSQL database
3. Set environment variables
4. Deploy:

```bash
railway up --service swa-backend
```

### Stripe App

```bash
cd apps/stripe-app
stripe apps upload
```

Then submit for review in the Stripe Dashboard.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/check-eligibility` | POST | Check surcharge eligibility |
| `/api/calculate-surcharge` | POST | Calculate surcharge amount |
| `/api/merchants` | GET/POST | Merchant CRUD |
| `/api/merchants/:id` | GET/PATCH | Merchant by ID |
| `/api/merchants/:id/analytics` | GET | Merchant analytics |
| `/api/compliance/states` | GET | Prohibited/capped states |
| `/api/webhooks/stripe` | POST | Stripe webhooks |

## Environment Variables

```bash
# Database
DATABASE_URL="postgresql://..."

# Stripe
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Server
PORT=3000
NODE_ENV=production
CORS_ORIGIN="https://dashboard.stripe.com"
```

## License

Proprietary - All rights reserved
