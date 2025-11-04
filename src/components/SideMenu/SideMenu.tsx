import React from 'react';
import { X } from 'lucide-react';
import type { Screen } from '../../types/index';
import './SideMenu.css';

interface SideMenuProps {
  onClose: () => void;
  onNavigate: (screen: Screen) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ onClose, onNavigate }) => {
  const handleNavigate = (screen: Screen) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <div className="side-menu-overlay" onClick={onClose}>
      <div className="side-menu" onClick={(e) => e.stopPropagation()}>
        <div className="side-menu-header">
          <div className="side-menu-logo">
            <img src="/logo.png" alt="DAYLY" className="side-menu-logo-icon app-logo" />
            <span className="side-menu-logo-text">DAYLY</span>
          </div>
          <X className="side-menu-close" onClick={onClose} />
        </div>

        <div className="side-menu-content">
          <button
            onClick={() => handleNavigate('store')}
            className="side-menu-item side-menu-item-highlight"
          >
            Buy Pack
          </button>
          <button
            onClick={() => handleNavigate('calendar')}
            className="side-menu-item"
          >
            Calendars
          </button>
          <button className="side-menu-item">Theme</button>
          <button className="side-menu-item">Widget</button>
          <button className="side-menu-item">Donate</button>
          <button className="side-menu-item">Feedback</button>
          <button className="side-menu-item">FAQ</button>
          <button
            onClick={() => handleNavigate('settings')}
            className="side-menu-item"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

