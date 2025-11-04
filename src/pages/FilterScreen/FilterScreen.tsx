import React from 'react';
import { X, Settings } from 'lucide-react';
import type { Screen } from '../../types/index';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SideMenu from '../../components/SideMenu/SideMenu';
import './FilterScreen.css';

interface FilterScreenProps {
  onNavigate: (screen: Screen) => void;
  onShowSideMenu: () => void;
  showSideMenu: boolean;
  onCloseSideMenu: () => void;
}

const FilterScreen: React.FC<FilterScreenProps> = ({
  onNavigate,
  onShowSideMenu,
  showSideMenu,
  onCloseSideMenu,
}) => {
  return (
    <div className="filter-screen">
      <div className="filter-header">
        <div className="filter-header-top">
          <button
            onClick={() => onNavigate('dashboard')}
            className="filter-close-button"
          >
            <X className="filter-close-icon" />
          </button>
          <h1 className="filter-title">
            <img src="/logo.png" alt="DAYLY" className="app-logo" />{' '}Filter & Sort
          </h1>
          <div className="filter-spacer"></div>
        </div>
      </div>

      <div className="filter-content">
        <div className="filter-section">
          <h3 className="filter-section-title">Status</h3>
          <div className="filter-options">
            <label className="filter-option">
              <input type="checkbox" className="filter-checkbox" defaultChecked />
              <span>All Tasks</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" className="filter-checkbox" />
              <span>Completed</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" className="filter-checkbox" />
              <span>Pending</span>
            </label>
            <label className="filter-option">
              <input type="checkbox" className="filter-checkbox" />
              <span>Draft</span>
            </label>
          </div>
        </div>

        <div className="filter-section">
          <h3 className="filter-section-title">Sort By</h3>
          <div className="filter-options">
            <label className="filter-option">
              <input type="radio" name="sort" className="filter-radio" defaultChecked />
              <span>Date (Newest First)</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="sort" className="filter-radio" />
              <span>Date (Oldest First)</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="sort" className="filter-radio" />
              <span>Name (A-Z)</span>
            </label>
            <label className="filter-option">
              <input type="radio" name="sort" className="filter-radio" />
              <span>Priority</span>
            </label>
          </div>
        </div>

        <div className="filter-section">
          <h3 className="filter-section-title">Actions</h3>
          <button className="filter-action-button">
            <Settings className="filter-action-icon" />
            <span>Manage Calendars</span>
          </button>
          <button className="filter-action-button">
            <span className="filter-action-emoji">🖨️</span>
            <span>Print</span>
          </button>
        </div>

        <div className="filter-pro-card">
          <h3 className="filter-pro-title">⭐ Upgrade to Pro</h3>
          <p className="filter-pro-description">
            Get advanced filtering, team collaboration, and more!
          </p>
          <button className="filter-pro-button">Upgrade Now</button>
        </div>
      </div>

      <BottomNavigation
        currentScreen="filter"
        onNavigate={onNavigate}
        onMenuClick={onShowSideMenu}
      />

      {showSideMenu && (
        <SideMenu onClose={onCloseSideMenu} onNavigate={onNavigate} />
      )}
    </div>
  );
};

export default FilterScreen;

