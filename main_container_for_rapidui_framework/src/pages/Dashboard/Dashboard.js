import React from 'react';
import './Dashboard.css';

/**
 * Dashboard page displaying overview metrics and stats
 */
// PUBLIC_INTERFACE
const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: '👥' },
    { label: 'Active Projects', value: '42', icon: '📁' },
    { label: 'Tasks Completed', value: '89%', icon: '✅' },
    { label: 'Revenue', value: '$12,345', icon: '💰' },
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'created a new project', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'completed a task', time: '3 hours ago' },
    { user: 'Bob Johnson', action: 'added a comment', time: '5 hours ago' },
    { user: 'Alice Williams', action: 'uploaded a file', time: '1 day ago' },
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="page-description">Welcome to your RapidUI dashboard!</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivities.map((activity, index) => (
              <div className="activity-item" key={index}>
                <div className="activity-content">
                  <strong>{activity.user}</strong> {activity.action}
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Quick Actions</h2>
          <div className="quick-actions">
            <button className="btn btn-action">Create Project</button>
            <button className="btn btn-action">Add Task</button>
            <button className="btn btn-action">Invite User</button>
            <button className="btn btn-action">Generate Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
