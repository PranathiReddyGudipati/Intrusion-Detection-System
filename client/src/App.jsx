import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Devices from './pages/Devices';
import Models from './pages/Models';
import Analytics from './pages/Analytics';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const { theme, toggleTheme } = useTheme();

  const getPageTitle = () => {
    switch (activePage) {
      case 'dashboard':
        return 'Overview Dashboard';
      case 'alerts':
        return 'Live Threat Stream';
      case 'devices':
        return 'Edge Hardware Telemetry';
      case 'models':
        return 'ML Performance Matrix';
      case 'analytics':
        return 'Deep Threat Intelligence';
      default:
        return 'Overview Dashboard';
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'alerts':
        return <Alerts />;
      case 'devices':
        return <Devices />;
      case 'models':
        return <Models />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="main-wrapper">
        <header className="top-header">
          <div className="top-header-left">
            <span className="top-header-breadcrumb">Intrusion Detection System /</span>
            <span className="top-header-title">{getPageTitle()}</span>
          </div>
          <div className="top-header-right">
            <div className="system-live-pill">
              <span className="status-dot status-dot-active" />
              <span>Real-Time Engine Active</span>
            </div>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>
        </header>
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;
