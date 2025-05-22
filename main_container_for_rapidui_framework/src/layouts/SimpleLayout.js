import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Layouts.css';

/**
 * Simple Layout with only Header and Footer
 * Used for public areas of the application or pages that don't need a sidebar
 */
// PUBLIC_INTERFACE
const SimpleLayout = () => {
  return (
    <div className="rapidui-layout simple-layout">
      <Header title="RapidUI Framework" />
      
      <div className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default SimpleLayout;
