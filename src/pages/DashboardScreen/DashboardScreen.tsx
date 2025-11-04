import React from 'react';
import { Search, User, Plus, Sparkles, Calendar, Star, ShoppingBag } from 'lucide-react';
import type { Calendar as CalendarType, Screen } from '../../types/index';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SideMenu from '../../components/SideMenu/SideMenu';
import AIModal from '../../components/AIModal/AIModal';
import '../../styles/colors.css';
import './DashboardScreen.css';

interface DashboardScreenProps {
  userName: string;
  calendars: CalendarType[];
  onNavigate: (screen: Screen) => void;
  onShowSideMenu: () => void;
  showSideMenu: boolean;
  onCloseSideMenu: () => void;
  showAIModal: boolean;
  onShowAIModal: () => void;
  onCloseAIModal: () => void;
  onProcessAIRequest: (input: string) => Promise<any>;
  onSaveAISchedule: (result: any) => void;
  onCalendarClick: (calendar: CalendarType) => void;
  onToggleFavorite: (calId: number) => void;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({
  userName,
  calendars,
  onNavigate,
  onShowSideMenu,
  showSideMenu,
  onCloseSideMenu,
  showAIModal,
  onShowAIModal,
  onCloseAIModal,
  onProcessAIRequest,
  onSaveAISchedule,
  onCalendarClick,
  onToggleFavorite,
}) => {
  const totalTasks = calendars.reduce((acc, cal) => acc + cal.tasks, 0);
  const completedTasks = calendars.reduce((acc, cal) => acc + cal.completed, 0);

  return (
    <div className="dashboard-screen">
      <div className="dashboard-header">
        <div className="dashboard-header-top">
          <h1 className="dashboard-title">
            <img src="/logo.png" alt="DAYLY" className="app-logo" />
            {' '}DAYLY
          </h1>
          <div className="dashboard-header-icons">
            <Search className="dashboard-icon" />
            <User
              className="dashboard-icon"
              onClick={() => onNavigate('profile')}
            />
          </div>
        </div>

        <div className="dashboard-greeting">
          <h2 className="dashboard-greeting-title">Hi {userName}! 👋</h2>
          <p className="dashboard-greeting-subtitle">Be disciplined</p>
          <p className="dashboard-date">26 NOV 2025 • Tuesday</p>
        </div>

        <div className="dashboard-search">
          <Search className="dashboard-search-icon" />
          <input
            type="text"
            placeholder="Search your workup..."
            className="dashboard-search-input"
          />
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div
            className="dashboard-card dashboard-card-blue"
            onClick={() => onNavigate('calendar')}
          >
            <Calendar className="dashboard-card-icon" />
            <h3 className="dashboard-card-title">Calendar</h3>
            <p className="dashboard-card-subtitle">{calendars.length} schedules</p>
          </div>

          <div
            className="dashboard-card dashboard-card-purple"
            onClick={() => onNavigate('store')}
          >
            <ShoppingBag className="dashboard-card-icon" />
            <h3 className="dashboard-card-title">All Packs</h3>
            <p className="dashboard-card-subtitle">Buy schedules</p>
          </div>
        </div>

        <button onClick={onShowAIModal} className="dashboard-ai-button">
          <div className="dashboard-ai-button-left">
            <Plus className="dashboard-ai-icon" />
            <span className="dashboard-ai-text">Add your new schedule</span>
          </div>
          <Sparkles className="dashboard-ai-icon" />
        </button>

        <div className="dashboard-overview">
          <h3 className="dashboard-overview-title">Today's Overview</h3>
          <div className="dashboard-stats">
            <div className="dashboard-stat dashboard-stat-blue">
              <p className="dashboard-stat-value">{totalTasks}</p>
              <p className="dashboard-stat-label">Total Tasks</p>
            </div>
            <div className="dashboard-stat dashboard-stat-green">
              <p className="dashboard-stat-value">{completedTasks}</p>
              <p className="dashboard-stat-label">Completed</p>
            </div>
          </div>
        </div>

        <div className="dashboard-calendars">
          <h3 className="dashboard-calendars-title">Your Calendars</h3>
          {calendars.slice(0, 3).map((cal) => (
            <div
              key={cal.id}
              onClick={() => onCalendarClick(cal)}
              className="dashboard-calendar-item"
            >
              <div className="dashboard-calendar-left">
                <div className={`dashboard-calendar-dot ${cal.color}`}></div>
                <div>
                  <h4 className="dashboard-calendar-name">{cal.name}</h4>
                  <p className="dashboard-calendar-info">
                    {cal.tasks} tasks • {cal.completed} completed
                  </p>
                </div>
              </div>
              {cal.favorite && (
                <Star className="dashboard-calendar-star" />
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation
        currentScreen="dashboard"
        onNavigate={onNavigate}
        onMenuClick={onShowSideMenu}
      />

      {showSideMenu && (
        <SideMenu onClose={onCloseSideMenu} onNavigate={onNavigate} />
      )}

      {showAIModal && (
        <AIModal
          onClose={onCloseAIModal}
          onSave={onSaveAISchedule}
          onProcessRequest={onProcessAIRequest}
        />
      )}
    </div>
  );
};

export default DashboardScreen;

