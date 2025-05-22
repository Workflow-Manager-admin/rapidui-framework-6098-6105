import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

/**
 * Header component for the RapidUI Framework
 * Provides navigation and user controls at the top of the application
 */
// PUBLIC_INTERFACE
const Header = ({ title = 'RapidUI Framework' }) => {
  return (
    <header className="rapidui-header">
      <div className="rapidui-header-container">
        <div className="rapidui-logo">
          <Link to="/">
            <span className="logo-symbol">*</span> {title}
          </Link>
        </div>
        
        <nav className="rapidui-nav">
          <ul>
            <li><Link to="/" className="nav-link">Dashboard</Link></li>
            <li><Link to="/profile" className="nav-link">Profile</Link></li>
            <li><Link to="/settings" className="nav-link">Settings</Link></li>
          </ul>
        </nav>
        
        <div className="rapidui-header-actions">
          <button className="btn btn-icon">
            <span className="notification-icon">🔔</span>
          </button>
          <button className="btn btn-icon">
            <span className="user-icon">👤</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
