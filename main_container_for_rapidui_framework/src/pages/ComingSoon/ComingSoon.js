import React, { useState } from 'react';
import './ComingSoon.css';

/**
 * Coming Soon page component
 * Displays a placeholder for features that are under development
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the upcoming feature
 * @param {string} props.description - Description of what's coming
 * @param {Array} props.features - List of planned features to display
 */
// PUBLIC_INTERFACE
const ComingSoon = ({ 
  title = 'Coming Soon', 
  description = 'We\'re working hard to bring you this exciting new feature. Stay tuned for updates!',
  features = []
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: '🚀',
      title: 'Fast & Efficient',
      description: 'Optimized performance for seamless user experience'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern UI with attention to every detail'
    },
    {
      icon: '💪',
      title: 'Powerful Features',
      description: 'Advanced tools to boost your productivity'
    }
  ];

  // Use provided features or defaults
  const displayFeatures = features.length > 0 ? features : defaultFeatures;
  
  // Frontend-only notification sign-up handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      // In a real app, this would send the email to a backend service
    }
  };

  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        <div className="coming-soon-icon">🔜</div>
        <h1 className="coming-soon-title">{title}</h1>
        <p className="coming-soon-description">{description}</p>
        
        {!submitted ? (
          <form className="notification-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                className="notification-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="notification-btn">
                Notify Me
              </button>
            </div>
            <p className="text-center text-sm text-secondary">
              Be the first to know when we launch.
            </p>
          </form>
        ) : (
          <p className="text-center text-success">
            <strong>Thank you! We'll notify you when we launch.</strong>
          </p>
        )}
        
        <div className="coming-soon-features">
          {displayFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
