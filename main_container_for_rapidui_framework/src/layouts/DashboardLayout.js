import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import './Layouts.css';

/**
 * Dashboard Layout with Sidebar, Header, and Footer
 * Used for authenticated areas of the application that need navigation
 */
// PUBLIC_INTERFACE
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="rapidui-layout dashboard-layout">
      <Header title="RapidUI Framework" />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        <div className="toggle-sidebar-btn-container">
          <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <div className="content-container">
          <Outlet />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
