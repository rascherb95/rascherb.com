import React from 'react';
import './NavBarColumn.css';

const DisplaySelector = ({ selectedView, setSelectedView }) => {
  return (
    <div className="nav-column">
      <nav className="nav-menu">
        <button
          onClick={() => setSelectedView('dashboard')}
          className={`nav-button ${selectedView === 'dashboard' ? 'active' : ''}`}
        >
          Roadmap
        </button>
        <button
          onClick={() => setSelectedView('income-statement')}
          className={`nav-button ${selectedView === 'income-statement' ? 'active' : ''}`}
        >
          Income Statement
        </button>
        <button
          onClick={() => setSelectedView('balance-sheet')}
          className={`nav-button ${selectedView === 'balance-sheet' ? 'active' : ''}`}
        >
          Balance Sheet
        </button>
      </nav>
    </div>
  );
};

export default DisplaySelector;