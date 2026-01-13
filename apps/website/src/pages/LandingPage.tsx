import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="#4F46E5"/>
            <path d="M10 18L16 24L26 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          GlassFee
        </Link>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
          <div className="nav-buttons">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">Log In</Link>
                <Link to="/signup" className="btn btn-primary">Get Started</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <span className="hero-badge">
          Stripe App Now Available
        </span>
        <h1>Transparently Pass Credit Card Fees to Customers</h1>
        <p className="hero-subtitle">
          GlassFee automates compliant credit card surcharging so you can recover
          processing fees while staying within state regulations. Works seamlessly
          with Stripe.
        </p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn btn-primary btn-large">Start Free Trial</Link>
          <a href="#how-it-works" className="btn btn-secondary btn-large">See How It Works</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">2.5-3%</div>
            <div className="stat-label">Average Fee Recovery</div>
          </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Compliance Automated</div>
          </div>
          <div className="stat">
            <div className="stat-value">50+</div>
            <div className="stat-label">State Rules Built-In</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LogosSection = () => (
  <section className="logos-section">
    <div className="container">
      <p className="logos-title">Trusted by businesses processing millions in payments</p>
      <div className="logos-grid">
        <span>TechCorp</span>
        <span>StartupXYZ</span>
        <span>CloudServices</span>
        <span>RetailPro</span>
        <span>ServiceHub</span>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features" id="features">
    <div className="container">
      <div className="section-header">
        <h2>Everything You Need for Compliant Fee Passing</h2>
        <p>
          GlassFee handles the complexity of credit card surcharging so you can
          focus on growing your business.
        </p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2"/>
              <path d="M3 10h18"/>
            </svg>
          </div>
          <h3>Smart BIN Detection</h3>
          <p>
            Automatically identifies credit cards vs debit and prepaid cards using
            Stripe's API. Only surcharge when legally permitted.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3>State Compliance Engine</h3>
          <p>
            Built-in rules for all 50 states. Automatically blocks surcharges in
            prohibited states like CA, CT, MA, and ME.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </div>
          <h3>Rate Cap Enforcement</h3>
          <p>
            Enforces state-specific rate caps automatically. Colorado (2%),
            Montana (3%), and card network limits are built-in.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
            </svg>
          </div>
          <h3>Dual Pricing Support</h3>
          <p>
            Generates proper disclosures for New York's dual pricing requirements
            and ensures checkout transparency.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 20V10M12 20V4M6 20v-6"/>
            </svg>
          </div>
          <h3>Analytics Dashboard</h3>
          <p>
            Track surcharges collected, fees recovered, and savings over time.
            Export reports for accounting and compliance audits.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <h3>Stripe Integration</h3>
          <p>
            Native Stripe App that works directly in your dashboard. No code
            changes required for basic setup.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="how-it-works" id="how-it-works">
    <div className="container">
      <div className="section-header">
        <h2>Simple Setup, Automatic Compliance</h2>
        <p>
          Get started in minutes with our Stripe App. No complex integrations required.
        </p>
      </div>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Install the App</h3>
          <p>Add GlassFee to your Stripe Dashboard with one click. No developers needed.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>Configure Settings</h3>
          <p>Set your surcharge rate and customize messaging. We handle compliance rules.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Automatic Detection</h3>
          <p>We detect card types and customer locations in real-time at checkout.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3>Recover Fees</h3>
          <p>Compliant surcharges are applied automatically. Track savings in your dashboard.</p>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="pricing" id="pricing">
    <div className="container">
      <div className="section-header">
        <h2>Only Pay When You Save</h2>
        <p>
          No upfront costs, no monthly fees. We only make money when you do.
        </p>
      </div>
      <div className="pricing-grid pricing-grid-single">
        <div className="pricing-card featured">
          <span className="pricing-badge">Success-Based</span>
          <h3>Pay Per Recovery</h3>
          <div className="price">
            20%<span className="price-period">of fees recovered</span>
          </div>
          <p className="pricing-description">
            We charge 20% of the processing fees we help you recover. If you don't save money, you don't pay anything.
          </p>
          <ul className="pricing-features">
            <li className="pricing-feature">
              <CheckIcon />
              $0 upfront cost
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              No monthly fees
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              All 50 state compliance
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              Smart BIN detection
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              Real-time analytics
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              Unlimited transaction volume
            </li>
            <li className="pricing-feature">
              <CheckIcon />
              Priority support
            </li>
          </ul>
          <Link to="/signup" className="btn btn-primary">Get Started Free</Link>
        </div>
      </div>
      <p className="pricing-note">
        Example: If we help you recover $1,000 in processing fees, you keep $800 and pay us $200. Simple as that.
      </p>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <div className="section-header">
        <h2>Loved by Businesses Like Yours</h2>
        <p>
          See how GlassFee is helping businesses recover processing fees compliantly.
        </p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p className="testimonial-content">
            "GlassFee saved us over $40,000 in our first year. The compliance
            automation gave us peace of mind - we don't have to worry about
            state regulations anymore."
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">JD</div>
            <div className="testimonial-info">
              <h4>James Davidson</h4>
              <p>CEO, TechRetail Inc</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-content">
            "Setup took 5 minutes and we were recovering fees the same day.
            The Stripe integration is seamless - it just works."
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">SM</div>
            <div className="testimonial-info">
              <h4>Sarah Mitchell</h4>
              <p>Founder, CloudStore</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-content">
            "We were nervous about customer pushback, but the transparent
            disclosures GlassFee provides made it a non-issue. Our customers
            understand and accept it."
          </p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">MR</div>
            <div className="testimonial-info">
              <h4>Michael Rodriguez</h4>
              <p>COO, ServicePro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="cta">
    <div className="container">
      <h2>Start Recovering Processing Fees Today</h2>
      <p>
        Join hundreds of businesses using GlassFee to transparently pass credit
        card fees to customers while staying fully compliant.
      </p>
      <div className="hero-buttons">
        <Link to="/signup" className="btn btn-secondary btn-large">Start Your Free Trial</Link>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#4F46E5"/>
              <path d="M10 18L16 24L26 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            GlassFee
          </Link>
          <p>
            Transparent credit card fee passing with automated compliance.
            Built for modern businesses using Stripe.
          </p>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#">Integrations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">API Reference</a></li>
            <li><a href="#">Compliance Guide</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 GlassFee. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Twitter">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="GitHub">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
