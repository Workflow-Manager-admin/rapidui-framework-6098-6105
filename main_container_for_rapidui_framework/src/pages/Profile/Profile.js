import React from 'react';
import './Profile.css';

/**
 * Profile page showing user information and settings
 */
// PUBLIC_INTERFACE
const Profile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Administrator',
    joinDate: 'January 15, 2023',
    avatar: '👤',
    bio: 'Product manager with 5+ years of experience in SaaS companies.'
  };

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile</h1>
        <p className="page-description">Manage your account information</p>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            {user.avatar}
          </div>
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-role">{user.role}</p>
          <div className="profile-stats">
            <div className="profile-stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="profile-stat">
              <span className="stat-value">36</span>
              <span className="stat-label">Tasks</span>
            </div>
          </div>
          <button className="btn">Edit Profile</button>
        </div>

        <div className="profile-details">
          <div className="profile-section">
            <h3>Personal Information</h3>
            <div className="profile-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user.name} readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={user.email} readOnly />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" value={user.role} readOnly />
              </div>
              <div className="form-group">
                <label>Member Since</label>
                <input type="text" value={user.joinDate} readOnly />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea readOnly>{user.bio}</textarea>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li>Updated profile picture - 2 days ago</li>
              <li>Completed "Dashboard Redesign" task - 5 days ago</li>
              <li>Created a new project "Marketing Campaign" - 1 week ago</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
