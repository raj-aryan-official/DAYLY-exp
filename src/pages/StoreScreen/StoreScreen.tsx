import React from 'react';
import { X } from 'lucide-react';
import type { Screen } from '../../types/index';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SideMenu from '../../components/SideMenu/SideMenu';
import './StoreScreen.css';

interface StoreScreenProps {
  onNavigate: (screen: Screen) => void;
  onShowSideMenu: () => void;
  showSideMenu: boolean;
  onCloseSideMenu: () => void;
}

const StoreScreen: React.FC<StoreScreenProps> = ({
  onNavigate,
  onShowSideMenu,
  showSideMenu,
  onCloseSideMenu,
}) => {
  const packs = [
    {
      id: 1,
      name: 'Gym Pack',
      price: 40,
      icon: '💪',
      description: 'Complete workout routines',
    },
    {
      id: 2,
      name: 'Food Pack',
      price: 40,
      icon: '🍽️',
      description: 'Healthy meal plans',
    },
    {
      id: 3,
      name: 'Diet Pack',
      price: 40,
      icon: '🥗',
      description: 'Weight management plans',
    },
    {
      id: 4,
      name: 'All Pack',
      price: 500,
      icon: '⭐',
      description: 'Get all packs + Pro features',
      highlight: true,
    },
  ];

  return (
    <div className="store-screen">
      <div className="store-header">
        <button
          onClick={() => onNavigate('dashboard')}
          className="store-close-button"
        >
          <X className="store-close-icon" />
        </button>

        <h1 className="store-title">
          <img src="/logo.png" alt="DAYLY" className="app-logo" />{' '}All Packs
        </h1>
        <p className="store-subtitle">
          Pre-built schedules to boost your productivity
        </p>
      </div>

      <div className="store-content">
        {packs.map((pack) => (
          <div
            key={pack.id}
            className={`store-pack-card ${
              pack.highlight ? 'store-pack-highlight' : ''
            }`}
          >
            <div className="store-pack-header">
              <div className="store-pack-info">
                <span className="store-pack-icon">{pack.icon}</span>
                <div>
                  <h3 className="store-pack-name">{pack.name}</h3>
                  <p className="store-pack-description">{pack.description}</p>
                </div>
              </div>
            </div>

            <div className="store-pack-footer">
              <span className="store-pack-price">₹{pack.price}</span>
              <button
                className={`store-pack-button ${
                  pack.highlight ? 'store-pack-button-highlight' : ''
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}

        <div className="store-pro-card">
          <h3 className="store-pro-title">🚀 Upgrade to Pro</h3>
          <ul className="store-pro-features">
            <li>✓ Merge & Join other schedules</li>
            <li>✓ Team chat & collaboration</li>
            <li>✓ Animated GIFs & unique ringtones</li>
            <li>✓ Share reviews with images</li>
            <li>✓ Social features (likes, comments, follow)</li>
          </ul>
          <button className="store-pro-button">Get Pro - ₹99/month</button>
        </div>
      </div>

      <BottomNavigation
        currentScreen="store"
        onNavigate={onNavigate}
        onMenuClick={onShowSideMenu}
      />

      {showSideMenu && (
        <SideMenu onClose={onCloseSideMenu} onNavigate={onNavigate} />
      )}
    </div>
  );
};

export default StoreScreen;

