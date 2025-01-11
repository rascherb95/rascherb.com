import React from 'react';
import BaseProjectLayout from '../BaseProjectLayout';
import { SAMPLE_DATA } from './FinStmtDisplays/SampleData'
import FinancialStructure from './FinStmtDisplays/FinancialStructure'

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
      <FinancialStructure sampleData={SAMPLE_DATA}></FinancialStructure>

    </BaseProjectLayout>
  );
};

export default BetterBooks;