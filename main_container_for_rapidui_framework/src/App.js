import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import SimpleLayout from './layouts/SimpleLayout';

// Pages
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

/**
 * Main App component for the RapidUI Framework
 * Sets up routing and layouts
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Dashboard Layout Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more dashboard routes here */}
          </Route>
          
          {/* Simple Layout Routes */}
          <Route element={<SimpleLayout />}>
            {/* Add simple layout routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
