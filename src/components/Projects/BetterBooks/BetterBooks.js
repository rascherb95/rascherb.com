import React, { useState } from 'react';
import BaseProjectLayout from '../BaseProjectLayout';
import { SAMPLE_DATA } from './FinStmtDisplays/SampleData';
import ProfitAndLoss from './FinStmtDisplays/ProfitAndLoss/Components/ProfitAndLoss';
import Dashboard from './FinStmtDisplays/Dashboard/Components/Dashboard';
import BalanceSheet from './FinStmtDisplays/BalanceSheet/Components/BalanceSheet';
import DisplaySelector from './NavBarColumn/NavBarColumn';

const BetterBooks = () => {
  const [selectedView, setSelectedView] = useState('income-statement');

  const renderContent = () => {
    switch (selectedView) {
      case 'dashboard': 
        return <Dashboard sampleData={SAMPLE_DATA} />;
      case 'income-statement':
        return <ProfitAndLoss sampleData={SAMPLE_DATA} />;
      case 'balance-sheet':
        return <BalanceSheet sampleData={SAMPLE_DATA} />;
      default:
        return <ProfitAndLoss sampleData={SAMPLE_DATA} />;
    }
  };

  return (
    <BaseProjectLayout title="BetterBooks">
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <DisplaySelector 
          selectedView={selectedView} 
          setSelectedView={setSelectedView}
        />
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: '1.5rem' }}>
          <p style={{
            textAlign: 'center',
            color: 'red',
            marginTop: '20px',
            marginBottom: '20px',
            fontSize: '1.1rem',
            fontWeight: '500',
          }}>
            Check back frequently for new features!
          </p>
          {renderContent()}
        </div>
      </div>
    </BaseProjectLayout>
  );
};

export default BetterBooks;