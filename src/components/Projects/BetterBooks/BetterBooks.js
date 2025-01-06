import React from 'react';
import BaseProjectLayout from '../BaseProjectLayout';
import ProfitLossDisplay from './FinStmtDisplays/ProfitLossDisplay';

const BetterBooks = () => {
  return (
    <BaseProjectLayout title="BetterBooks">
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
      <ProfitLossDisplay></ProfitLossDisplay>

    </BaseProjectLayout>
  );
};

export default BetterBooks;