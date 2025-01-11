import React, { useState, useEffect } from 'react';
import ProfitLossHeader from './ProfitLossHeader';
import ProfitLossRow from './ProfitLossRow';
import { parseLineItem, getMasterStructure } from '../../utils/ProfitLossUtils';
import './ProfitAndLoss.css';

const ProfitAndLoss = ({ sampleData }) => {
  const [masterStructure, setMasterStructure] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (sampleData?.Rows?.Row) {
        const fullPeriodData = sampleData.Rows.Row.map(parseLineItem);
        const structure = getMasterStructure(fullPeriodData);
        setMasterStructure(structure);
      }
    } catch (err) {
      setError(err.message);
    }
  }, [sampleData]);

  if (error) {
    return (
      <div className="error-message">
        Error processing data: {error}
      </div>
    );
  }

  if (!masterStructure) {
    return (
      <div className="loading-message">
        Loading profit and loss statement...
      </div>
    );
  }

  return (
    <div className="profit-loss-container">
      <ProfitLossHeader endPeriod={sampleData?.Header?.EndPeriod} />
      
      <table className="financial-table">
        <tbody>
          {masterStructure.map((row, index) => (
            <ProfitLossRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitAndLoss;