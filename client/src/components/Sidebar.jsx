import React from 'react';
import { 
  HiShieldCheck, 
  HiSquares2X2, 
  HiBellAlert, 
  HiCpuChip, 
  HiChartBar, 
  HiArrowTrendingUp 
} from 'react-icons/hi2';

export default function Sidebar({ activePage, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HiSquares2X2 },
    { id: 'alerts', label: 'Alerts', icon: HiBellAlert },
    { id: 'devices', label: 'Devices', icon: HiCpuChip },
    { id: 'models', label: 'Models', icon: HiChartBar },
    { id: 'analytics', label: 'Analytics', icon: HiArrowTrendingUp }
  ];

  return (
    <aside className="sidebar">
      <div>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="brand-logo-icon">
            <HiShieldCheck />
          </div>
          <div className="brand-text">
            <div className="brand-title">IDS Monitor</div>
            <div className="brand-badge">IoT / IIoT Defense</div>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="sidebar-nav">
          <div className="nav-section-label">MONITORING</div>
          <ul className="nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <Icon className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {item.id === 'alerts' && (
                      <span className="nav-pill">Live</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* System Status Footer */}
      <div className="sidebar-footer">
        <div className="status-indicator">
          <span className="status-dot status-dot-active" />
          <div>
            <div className="status-text-primary">System Active</div>
            <div className="status-text-secondary">AI Defense Engine v2.4</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
