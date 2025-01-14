import React, { useState } from 'react';
import BaseProjectLayout from '../BaseProjectLayout';
import { SAMPLE_PL_DETAIL_DATA } from './FinStmtDisplays/Data/SamplePLDetailData';
import ProfitAndLoss from './FinStmtDisplays/ProfitAndLoss/Components/ProfitAndLoss/ProfitAndLoss';
import Dashboard from './FinStmtDisplays/Dashboard/Components/Dashboard';
import BalanceSheet from './FinStmtDisplays/BalanceSheet/Components/BalanceSheet';
import DisplaySelector from './NavBarColumn/NavBarColumn';

const BetterBooks = () => {
  const [selectedView, setSelectedView] = useState('dashboard');

  const renderContent = () => {
    switch (selectedView) {
      case 'dashboard': 
        return <Dashboard data={SAMPLE_PL_DETAIL_DATA} />;
      case 'income-statement':
        return <ProfitAndLoss data={SAMPLE_PL_DETAIL_DATA} />;
      case 'balance-sheet':
        return <BalanceSheet data={SAMPLE_PL_DETAIL_DATA} />;
      default:
        return <ProfitAndLoss data={SAMPLE_PL_DETAIL_DATA} />;
    }
  };

  return (
    <BaseProjectLayout title="BetterBooks">
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <DisplaySelector 
          selectedView={selectedView} 
          setSelectedView={setSelectedView}
        />
        
        {/* Message to be deleted: Check back for more features */}
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