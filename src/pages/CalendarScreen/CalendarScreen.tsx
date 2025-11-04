import React from 'react';
import { X, Plus, Calendar, Star } from 'lucide-react';
import type { Calendar as CalendarType, Screen } from '../../types/index';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SideMenu from '../../components/SideMenu/SideMenu';
import AIModal from '../../components/AIModal/AIModal';
import '../../styles/colors.css';
import './CalendarScreen.css';

interface CalendarScreenProps {
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

const CalendarScreen: React.FC<CalendarScreenProps> = ({
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
  return (
    <div className="calendar-screen">
      <div className="calendar-header">
        <div className="calendar-header-top">
          <button
            onClick={() => onNavigate('dashboard')}
            className="calendar-close-button"
          >
            <X className="calendar-close-icon" />
          </button>
          <h1 className="calendar-title">
            <img src="/logo.png" alt="DAYLY" className="app-logo" />{' '}My Calendars
          </h1>
          <Plus
            className="calendar-add-icon"
            onClick={onShowAIModal}
          />
        </div>
      </div>

      <div className="calendar-content">
        <div className="calendar-grid">
          {calendars.map((cal) => (
            <div
              key={cal.id}
              className="calendar-card"
              onClick={() => onCalendarClick(cal)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(cal.id);
                }}
                className="calendar-favorite-button"
              >
                <Star
                  className={`calendar-favorite-icon ${
                    cal.favorite ? 'calendar-favorite-active' : ''
                  }`}
                />
              </button>

              <div className={`calendar-icon-wrapper ${cal.color}`}>
                <Calendar className="calendar-icon" />
              </div>

              <h3 className="calendar-card-title">{cal.name}</h3>
              <p className="calendar-card-subtitle">{cal.tasks} tasks</p>
              <div className="calendar-progress">
                <div className="calendar-progress-bar">
                  <div
                    className={`calendar-progress-fill ${cal.color}`}
                    style={{
                      width: `${(cal.completed / cal.tasks) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          <div className="calendar-add-card" onClick={onShowAIModal}>
            <div className="calendar-add-content">
              <Plus className="calendar-add-plus-icon" />
              <p className="calendar-add-text">Add New</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation
        currentScreen="calendar"
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

export default CalendarScreen;

