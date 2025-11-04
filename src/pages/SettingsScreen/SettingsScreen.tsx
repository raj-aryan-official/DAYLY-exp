import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import type { Screen } from '../../types/index';
import './SettingsScreen.css';

interface SettingsScreenProps {
  onNavigate: (screen: Screen) => void;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="settings-screen">
      <div className="settings-header">
        <div className="settings-header-top">
          <button
            onClick={() => onNavigate('dashboard')}
            className="settings-close-button"
          >
            <X className="settings-close-icon" />
          </button>
          <h1 className="settings-title">
            <img src="/logo.png" alt="DAYLY" className="app-logo" />{' '}Settings
          </h1>
          <div className="settings-spacer"></div>
        </div>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3 className="settings-section-title">Account</h3>
          <button className="settings-item">
            <span>Account Sync</span>
            <ChevronRight className="settings-chevron" />
          </button>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">App</h3>
          <button className="settings-item settings-item-border">
            <span>Widget</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <button className="settings-item settings-item-border">
            <span>Theme</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <button className="settings-item">
            <span>Sync Calendar</span>
            <ChevronRight className="settings-chevron" />
          </button>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Notifications</h3>
          <button className="settings-item settings-item-border">
            <span>Notification & Reminder</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <button className="settings-item">
            <span>Task Completion Tone</span>
            <ChevronRight className="settings-chevron" />
          </button>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">Date & Time</h3>
          <button className="settings-item settings-item-border">
            <span>First Day of Week</span>
            <span className="settings-value">Monday</span>
          </button>
          <button className="settings-item settings-item-border">
            <span>Time Format</span>
            <span className="settings-value">12-hour</span>
          </button>
          <button className="settings-item">
            <span>Date Format</span>
            <span className="settings-value">DD/MM/YYYY</span>
          </button>
        </div>

        <div className="settings-section">
          <h3 className="settings-section-title">About</h3>
          <button className="settings-item settings-item-border">
            <span>Language</span>
            <span className="settings-value">English</span>
          </button>
          <button className="settings-item settings-item-border">
            <span>Rate Us</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <button className="settings-item settings-item-border">
            <span>Share App</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <button className="settings-item settings-item-border">
            <span>Privacy Policy</span>
            <ChevronRight className="settings-chevron" />
          </button>
          <div className="settings-version">Version 1.0.0</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;

