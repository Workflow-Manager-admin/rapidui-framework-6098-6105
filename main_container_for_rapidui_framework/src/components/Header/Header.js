import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

/**
 * Header component for the RapidUI Framework
 * Provides navigation and user controls at the top of the application
 * Includes sample frontend-only functionality for user profile and notifications
 */
// PUBLIC_INTERFACE
const Header = ({ title = 'RapidUI Framework' }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();

  // Mock user data - frontend only
  const userData = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Administrator',
    avatar: '👤'
  };

  // Mock notifications - frontend only
  const notifications = [
    { id: 1, content: 'Your project "Marketing Campaign" has been approved', time: '5 minutes ago', read: false },
    { id: 2, content: 'Jane Smith commented on your task', time: '2 hours ago', read: false },
    { id: 3, content: 'New version release: v2.4.0 is now available', time: '1 day ago', read: true }
  ];

  const unreadNotifications = notifications.filter(n => !n.read).length;

  // Toggle dropdowns
  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userDropdownOpen) setUserDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = () => {
    setUserDropdownOpen(false);
    setNotificationsOpen(false);
  };

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
            <li><Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Dashboard</Link></li>
            <li><Link to="/profile" className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}>Profile</Link></li>
            <li><Link to="/settings" className={location.pathname === '/settings' ? 'nav-link active' : 'nav-link'}>Settings</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>Projects</Link></li>
            <li><Link to="/analytics" className={location.pathname === '/analytics' ? 'nav-link active' : 'nav-link'}>Analytics</Link></li>
          </ul>
        </nav>
        
        <div className="rapidui-header-actions">
          <div className="notification-dropdown">
            <button className="btn btn-icon" onClick={toggleNotifications}>
              <span className="notification-icon">🔔</span>
              {unreadNotifications > 0 && (
                <span className="notification-badge">{unreadNotifications}</span>
              )}
            </button>
            
            {notificationsOpen && (
              <div className="dropdown-menu active">
                <div className="dropdown-header">
                  <h4>Notifications</h4>
                </div>
                <div className="dropdown-menu-items">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className="notification-item"
                        style={{fontWeight: notification.read ? 'normal' : 'bold'}}
                      >
                        <div className="notification-content">{notification.content}</div>
                        <div className="notification-time">{notification.time}</div>
                      </div>
                    ))
                  ) : (
                    <div className="notification-item">No notifications</div>
                  )}
                </div>
                <div className="notification-footer">
                  <a href="#view-all">View all notifications</a>
                </div>
              </div>
            )}
          </div>
          
          <div className="user-dropdown">
            <button className="btn btn-icon" onClick={toggleUserDropdown}>
              <span className="user-icon">{userData.avatar}</span>
            </button>
            
            {userDropdownOpen && (
              <div className="dropdown-menu active">
                <div className="dropdown-header">
                  <div className="user-info">
                    <div className="user-avatar-sm">{userData.avatar}</div>
                    <div className="user-details">
                      <h4>{userData.name}</h4>
                      <p>{userData.email}</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-menu-items">
                  <Link to="/profile" className="dropdown-item">
                    <span>👤</span> My Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <span>⚙️</span> Account Settings
                  </Link>
                  <Link to="/messages" className="dropdown-item">
                    <span>✉️</span> Messages
                    <span className="ml-auto badge">3</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="/help" className="dropdown-item">
                    <span>❓</span> Help Center
                  </Link>
                  <a href="#logout" className="dropdown-item">
                    <span>🚪</span> Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Invisible overlay to close dropdowns when clicking outside */}
      {(userDropdownOpen || notificationsOpen) && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 99
          }}
          onClick={handleClickOutside}
        />
      )}
    </header>
  );
};

export default Header;
