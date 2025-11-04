import React from 'react';
import { X, User } from 'lucide-react';
import type { Calendar as CalendarType, Screen } from '../../types/index';
import './ProfileScreen.css';

interface ProfileScreenProps {
  userName: string;
  calendars: CalendarType[];
  onNavigate: (screen: Screen) => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  userName,
  calendars,
  onNavigate,
}) => {
  const totalTasks = calendars.reduce((acc, cal) => acc + cal.tasks, 0);
  const completedTasks = calendars.reduce((acc, cal) => acc + cal.completed, 0);
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="profile-screen">
      <div className="profile-header">
        <button
          onClick={() => onNavigate('dashboard')}
          className="profile-close-button"
        >
          <X className="profile-close-icon" />
        </button>

        <div className="profile-user-section">
          <div className="profile-avatar">
            <User className="profile-avatar-icon" />
          </div>
          <h2 className="profile-user-name">Hi {userName}!</h2>
          <p className="profile-user-subtitle">Be disciplined</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h3 className="profile-card-title">Task Overview</h3>
          <div className="profile-stats">
            <div className="profile-stat">
              <p className="profile-stat-value profile-stat-blue">{totalTasks}</p>
              <p className="profile-stat-label">Total Task</p>
            </div>
            <div className="profile-stat">
              <p className="profile-stat-value profile-stat-green">{completedTasks}</p>
              <p className="profile-stat-label">Completed</p>
            </div>
            <div className="profile-stat">
              <p className="profile-stat-value profile-stat-orange">{pendingTasks}</p>
              <p className="profile-stat-label">Pending</p>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3 className="profile-card-title">Overall Review</h3>
          <div className="profile-review">
            <div className="profile-review-item">
              <div className="profile-review-header">
                <span className="profile-review-label">Consistency</span>
                <span className="profile-review-value">78%</span>
              </div>
              <div className="profile-progress-bar">
                <div
                  className="profile-progress-fill profile-progress-blue"
                  style={{ width: '78%' }}
                ></div>
              </div>
            </div>
            <div className="profile-review-item">
              <div className="profile-review-header">
                <span className="profile-review-label">Packs Completed</span>
                <span className="profile-review-value">3/5</span>
              </div>
              <div className="profile-progress-bar">
                <div
                  className="profile-progress-fill profile-progress-purple"
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('store')}
          className="profile-cta-button"
        >
          Buy More Packs
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;

