import React from 'react';

const ProfitLossHeader = ({ endPeriod, companyName = "CompanyName" }) => {
  const getEndPeriodMonth = () => {
    const date = new Date(endPeriod);
    return date.toLocaleString('default', { 
      month: 'short',
      year: '2-digit'
    });
  };

  return (
    <div className="report-header">
      <h1 className="company-name">{companyName}</h1>
      <h2 className="report-title">Income Statement</h2>
      <p className="report-period">For the period ended {getEndPeriodMonth()}</p>
    </div>
  );
};

export default ProfitLossHeader;