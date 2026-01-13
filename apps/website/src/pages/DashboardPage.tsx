import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Failed to log out:', err);
    }
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <svg className="logo-icon" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="8" fill="#4F46E5"/>
              <path d="M10 18L16 24L26 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            GlassFee
          </Link>
          <div className="nav-buttons">
            <span className="user-email">{user?.email}</span>
            <button onClick={handleLogout} className="btn btn-secondary">
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-welcome">
            <h1>Welcome to your Dashboard</h1>
            <p>Manage your GlassFee settings and view your fee recovery analytics.</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Getting Started</h3>
              <p>Connect your Stripe account to start recovering processing fees.</p>
              <button className="btn btn-primary">Connect Stripe</button>
            </div>

            <div className="dashboard-card">
              <h3>Documentation</h3>
              <p>Learn how to configure GlassFee for your business.</p>
              <a href="#" className="btn btn-secondary">View Docs</a>
            </div>

            <div className="dashboard-card">
              <h3>Support</h3>
              <p>Need help? Our team is here to assist you.</p>
              <a href="#" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
