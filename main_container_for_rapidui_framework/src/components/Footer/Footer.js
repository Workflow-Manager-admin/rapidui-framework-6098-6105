import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer component for the RapidUI Framework
 * Provides links and copyright information at the bottom of the application
 */
// PUBLIC_INTERFACE
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="rapidui-footer">
      <div className="rapidui-footer-container">
        <div className="rapidui-footer-content">
          <div className="footer-section">
            <h4>RapidUI Framework</h4>
            <p>A versatile base application template with standard UI components for rapid application development.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#components">Components</a></li>
              <li><a href="#help">Help</a></li>
            </ul>
          </div>
        </div>
        
        <div className="rapidui-footer-bottom">
          <p>&copy; {year} KAVIA AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
