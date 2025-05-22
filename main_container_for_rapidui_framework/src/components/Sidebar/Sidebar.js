import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

/**
 * Sidebar component for the RapidUI Framework
 * Provides navigation and menu structure for dashboard layouts
 * Includes toggle button for reopening when closed
 */
// PUBLIC_INTERFACE
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/' },
    { icon: '👤', label: 'Profile', path: '/profile' },
    { icon: '⚙️', label: 'Settings', path: '/settings' },
    { icon: '📁', label: 'Projects', path: '/projects' },
    { icon: '📊', label: 'Analytics', path: '/analytics' },
    { icon: '💬', label: 'Messages', path: '/messages' },
  ];

  return (
    <>
      {/* Sidebar toggle button - visible when sidebar is closed */}
      {!isOpen && (
        <button className="sidebar-toggle-fixed" onClick={toggleSidebar}>
          ▶
        </button>
      )}
      
      {/* Main sidebar */}
      <aside className={`rapidui-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={toggleSidebar}>
            ×
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-label">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">User Name</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
