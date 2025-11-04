import React from 'react';
import { Menu, CheckSquare, Calendar, Filter } from 'lucide-react';
import type { Screen } from '../../types/index';
import './BottomNavigation.css';

interface BottomNavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onMenuClick: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentScreen,
  onNavigate,
  onMenuClick,
}) => {
  return (
    <div className="bottom-navigation">
      <button onClick={onMenuClick} className="nav-item">
        <Menu className="nav-icon" />
        <span className="nav-label">Menu</span>
      </button>
      <button
        onClick={() => onNavigate('tasks')}
        className={`nav-item ${currentScreen === 'tasks' ? 'active' : ''}`}
      >
        <CheckSquare className="nav-icon" />
        <span className="nav-label">Tasks</span>
      </button>
      <button
        onClick={() => onNavigate('calendar')}
        className={`nav-item ${currentScreen === 'calendar' ? 'active' : ''}`}
      >
        <Calendar className="nav-icon" />
        <span className="nav-label">Calendar</span>
      </button>
      <button
        onClick={() => onNavigate('filter')}
        className={`nav-item ${currentScreen === 'filter' ? 'active' : ''}`}
      >
        <Filter className="nav-icon" />
        <span className="nav-label">Filter</span>
      </button>
    </div>
  );
};

export default BottomNavigation;

