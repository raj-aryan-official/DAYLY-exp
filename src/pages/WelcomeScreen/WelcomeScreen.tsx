import React from 'react';
import { Calendar, Sparkles, Bell, Star } from 'lucide-react';
import './WelcomeScreen.css';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <img src="/logo.png" alt="DAYLY" className="app-logo-lg" />
        <h1 className="welcome-title">DAYLY</h1>
        <p className="welcome-subtitle">India's First</p>
        <p className="welcome-description">AI Powered Time Scheduler</p>
      </div>

      <div className="welcome-features">
        <div className="welcome-feature-card">
          <Sparkles className="welcome-feature-icon" />
          <h3 className="welcome-feature-title">Create Tasks Easily</h3>
          <p className="welcome-feature-text">
            Just tell AI what you need, it creates your schedule
          </p>
        </div>

        <div className="welcome-feature-card">
          <Bell className="welcome-feature-icon" />
          <h3 className="welcome-feature-title">Smart Reminders</h3>
          <p className="welcome-feature-text">
            Never miss important tasks with AI-powered notifications
          </p>
        </div>

        <div className="welcome-feature-card">
          <Star className="welcome-feature-icon" />
          <h3 className="welcome-feature-title">Personalized Experience</h3>
          <p className="welcome-feature-text">
            Custom themes, widgets, and tailored schedules
          </p>
        </div>
      </div>

      <button onClick={onGetStarted} className="welcome-button">
        Get Started
      </button>
    </div>
  );
};

export default WelcomeScreen;

