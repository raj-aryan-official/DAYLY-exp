import React from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src="/logo.png" alt="DAYLY" className="app-logo-lg" />
        <h1 className="splash-title">DAYLY</h1>
        <p className="splash-subtitle">AI Powered Scheduler</p>
      </div>
    </div>
  );
};

export default SplashScreen;

