import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PresentationDeck from './components/PresentationDeck';
import LauncherDemo from './components/LauncherDemo';
import MatchingRateDemo from './components/MatchingRateDemo';
import TransactionListDemo from './components/TransactionListDemo';
import FileLogsDemo from './components/FileLogsDemo';

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation');
  const [darkMode, setDarkMode] = useState(false); // Default to Yardi Voyager Native Light Theme

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode-override');
    } else {
      document.body.classList.remove('dark-mode-override');
    }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Container */}
      <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0 16px 30px', flex: 1 }}>
        
        {/* Active Tab View */}
        <main>
          {activeTab === 'presentation' && (
            <PresentationDeck onNavigateToDemo={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'launcher' && (
            <LauncherDemo />
          )}

          {activeTab === 'matching' && (
            <MatchingRateDemo />
          )}

          {activeTab === 'transactions' && (
            <TransactionListDemo />
          )}

          {activeTab === 'filelogs' && (
            <FileLogsDemo />
          )}
        </main>

        {/* LogiPrime & Yardi Footer Bar */}
        <footer style={{
          marginTop: '40px',
          padding: '16px 20px',
          borderTop: '1px solid var(--yardi-nav-border, #c0c0c0)',
          background: 'var(--yardi-panel-bg, #ffffff)',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          fontSize: '11px',
          color: '#555555',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'right', color: '#444444', fontWeight: '500' }}>
            &copy; 2026 LogiPrime Solutions FZCO. All rights reserved.
          </div>

          <div style={{
            borderTop: '1px solid rgba(0,0,0,0.08)',
            paddingTop: '8px',
            fontSize: '10px',
            color: '#777777',
            lineHeight: 1.5
          }}>
            Yardi® and Yardi Voyager® are trademarks or registered trademarks of Yardi Systems, Inc. LogiPrime Solutions is an independent company.
          </div>
        </footer>

      </div>

    </div>
  );
}
