import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer component for the RapidUI Framework
 * Provides links and copyright information at the bottom of the application
 * Enhanced with frontend-only sample data and functionality
 */
// PUBLIC_INTERFACE
const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Frontend-only newsletter subscription handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      // In a real app, this would send the email to a backend service
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };
  
  // Sample company stats - frontend only
  const companyStats = {
    customers: '2,500+',
    countries: '45+',
    developers: '15,000+',
    projects: '32,000+'
  };
  
  return (
    <footer className="rapidui-footer">
      <div className="rapidui-footer-container">
        <div className="rapidui-footer-content">
          <div className="footer-section">
            <h4>RapidUI Framework</h4>
            <p>A versatile base application template with standard UI components for rapid application development.</p>
            <div className="social-links">
              <a href="#twitter" className="social-icon">𝕏</a>
              <a href="#facebook" className="social-icon">f</a>
              <a href="#linkedin" className="social-icon">in</a>
              <a href="#github" className="social-icon">GH</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/analytics">Analytics</Link></li>
              <li><Link to="/projects">Project Management</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#tutorials">Tutorials & Guides</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#support">Support Center</a></li>
              <li><a href="#community">Community Forum</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates and features.</p>
            <div className="newsletter-form">
              {!subscribed ? (
                <form onSubmit={handleSubscribe}>
                  <div className="form-input-group">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="footer-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="footer-btn">Subscribe</button>
                  </div>
                </form>
              ) : (
                <p><strong>Thank you for subscribing!</strong></p>
              )}
            </div>
          </div>
        </div>
        
        <div className="rapidui-footer-bottom">
          <p>&copy; {year} KAVIA AI. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
