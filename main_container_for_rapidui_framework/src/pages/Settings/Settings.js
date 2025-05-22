import React, { useState } from 'react';
import './Settings.css';

/**
 * Settings page for user preferences and application settings
 */
// PUBLIC_INTERFACE
const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  
  const tabs = [
    { id: 'account', label: 'Account' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'security', label: 'Security & Privacy' },
  ];
  
  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p className="page-description">Manage your application settings</p>
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          <nav className="settings-nav">
            <ul>
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button 
                    className={activeTab === tab.id ? 'active' : ''} 
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="settings-content">
          {activeTab === 'account' && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              
              <form className="settings-form">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" defaultValue="user@example.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Display Name</label>
                  <input type="text" id="name" defaultValue="User Name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="timeZone">Time Zone</label>
                  <select id="timeZone" defaultValue="UTC">
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Standard Time (EST)</option>
                    <option value="PST">Pacific Standard Time (PST)</option>
                    <option value="GMT">Greenwich Mean Time (GMT)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="language">Language</label>
                  <select id="language" defaultValue="en">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn">Save Changes</button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2>Appearance Settings</h2>
              
              <div className="settings-group">
                <h3>Theme</h3>
                <div className="theme-options">
                  <div className="theme-option active">
                    <div className="theme-preview dark"></div>
                    <span>Dark (Default)</span>
                  </div>
                  <div className="theme-option">
                    <div className="theme-preview light"></div>
                    <span>Light</span>
                  </div>
                  <div className="theme-option">
                    <div className="theme-preview system"></div>
                    <span>System</span>
                  </div>
                </div>
              </div>
              
              <div className="settings-group">
                <h3>Accent Color</h3>
                <div className="color-options">
                  <button className="color-option active" style={{backgroundColor: 'var(--kavia-orange)'}}></button>
                  <button className="color-option" style={{backgroundColor: '#3498db'}}></button>
                  <button className="color-option" style={{backgroundColor: '#2ecc71'}}></button>
                  <button className="color-option" style={{backgroundColor: '#9b59b6'}}></button>
                  <button className="color-option" style={{backgroundColor: '#e74c3c'}}></button>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn">Save Changes</button>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Settings</h2>
              
              <div className="settings-group">
                <h3>Email Notifications</h3>
                
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Project updates
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Task assignments
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Direct messages
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    Marketing and newsletters
                  </label>
                </div>
              </div>
              
              <div className="settings-group">
                <h3>Push Notifications</h3>
                
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Enable push notifications
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Project updates
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    Task deadlines
                  </label>
                </div>
              </div>
              
              <div className="form-actions">
                <button className="btn">Save Changes</button>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="settings-section">
              <h2>Security & Privacy Settings</h2>
              
              <div className="settings-group">
                <h3>Password</h3>
                <form className="settings-form">
                  <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input type="password" id="currentPassword" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" id="newPassword" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" />
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="btn">Update Password</button>
                  </div>
                </form>
              </div>
              
              <div className="settings-group">
                <h3>Two-Factor Authentication</h3>
                <div className="two-factor-status">
                  <span className="status disabled">Disabled</span>
                  <button className="btn">Enable 2FA</button>
                </div>
              </div>
              
              <div className="settings-group">
                <h3>Session Management</h3>
                <div className="session-list">
                  <div className="session-item">
                    <div className="session-details">
                      <strong>Current Session</strong>
                      <p>Chrome on Windows • Seattle, USA</p>
                      <span className="session-time">Active now</span>
                    </div>
                  </div>
                  
                  <div className="session-item">
                    <div className="session-details">
                      <strong>Mobile App</strong>
                      <p>iOS • New York, USA</p>
                      <span className="session-time">Last active: Yesterday</span>
                    </div>
                    <button className="btn btn-small">Log Out</button>
                  </div>
                </div>
                
                <button className="btn btn-danger">Log Out All Other Devices</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
