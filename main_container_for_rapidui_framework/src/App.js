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
import ComingSoon from './pages/ComingSoon/ComingSoon';

/**
 * Main App component for the RapidUI Framework
 * Sets up routing and layouts
 */
function App() {
  // Custom content for Projects page
  const projectsContent = {
    title: 'Projects Coming Soon',
    description: 'Our powerful project management tools are under development. Soon you\'ll be able to create, manage, and track all your projects in one place.',
    features: [
      {
        icon: '📋',
        title: 'Task Management',
        description: 'Create tasks, assign team members, and track progress'
      },
      {
        icon: '📊',
        title: 'Progress Tracking',
        description: 'Visualize project progress with charts and metrics'
      },
      {
        icon: '👥',
        title: 'Team Collaboration',
        description: 'Work together efficiently with built-in communication tools'
      }
    ]
  };

  // Custom content for Analytics page
  const analyticsContent = {
    title: 'Analytics Coming Soon',
    description: 'Our comprehensive analytics dashboard is being built to give you powerful insights into your data and performance metrics.',
    features: [
      {
        icon: '📈',
        title: 'Performance Metrics',
        description: 'Track key performance indicators and business metrics'
      },
      {
        icon: '🔍',
        title: 'Data Visualization',
        description: 'Interactive charts and graphs to visualize your data'
      },
      {
        icon: '📱',
        title: 'Real-time Updates',
        description: 'Get live updates and notifications on important changes'
      }
    ]
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Dashboard Layout Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/projects" element={
              <ComingSoon 
                title={projectsContent.title} 
                description={projectsContent.description} 
                features={projectsContent.features} 
              />
            } />
            <Route path="/analytics" element={
              <ComingSoon 
                title={analyticsContent.title} 
                description={analyticsContent.description} 
                features={analyticsContent.features} 
              />
            } />
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
