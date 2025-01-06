import React from 'react';
import './ProfitLossDisplay.css'
import { SAMPLE_DATA } from './SampleData';

const formatAmount = (amount, type) => {
  const num = parseFloat(amount);
  
  // For section headers, use currency format
  if (type === 'section_header') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(num);
  }
  
  // For all other rows, just format the number
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

const FinancialRow = ({ name, amount, type, indentLevel = 0 }) => {
  const getClassName = () => {
    const indentClass = `indent-level-${indentLevel}`;
    switch (type) {
      case 'section_header':
        return `financial-row-header ${indentClass}`;
      case 'summary':
        return `financial-row-summary ${indentClass}`;
      default:
        return `financial-row-data ${indentClass}`;
    }
  };

  return (
    <tr>
      <td className={getClassName()}>{name}</td>
      <td className={`${getClassName()} amount-cell`}>
        {amount ? formatAmount(amount, type) : ''}
      </td>
    </tr>
  );
};

const renderAccount = (account, level = 0) => {
  const rows = [];

  // Add header row
  if (account.type === 'section_header') {
    rows.push(
      <FinancialRow
        key={`header-${account.name}`}
        name={account.name}
        amount={account.amount}
        type="section_header"
        indentLevel={level}
      />
    );
  } else {
    rows.push(
      <FinancialRow
        key={`item-${account.name}`}
        name={account.name}
        amount={account.amount}
        type="data"
        indentLevel={level}
      />
    );
  }

  // Add children
  if (account.children) {
    account.children.forEach(child => {
      rows.push(...renderAccount(child, level + 1));
    });
  }

  // Add summary
  if (account.summary) {
    rows.push(
      <FinancialRow
        key={`summary-${account.summary.name}`}
        name={account.summary.name}
        amount={account.summary.amount}
        type="summary"
        indentLevel={level}
      />
    );
  }

  return rows;
};

const formatMonthYear = (dateString) => {
  // dateString is in format "2024-01"
  const [year, month] = dateString.split('-');
  
  // Create array of month abbreviations
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  // Get month abbreviation (subtract 1 from month since array is 0-based)
  const monthAbbrev = months[parseInt(month) - 1];
  
  // Get last 2 digits of year
  const yearShort = year.slice(2);
  
  return `${monthAbbrev}-${yearShort}`;
};

export const ProfitLossDisplay = () => {
  const months = Object.keys(SAMPLE_DATA);
  return (
    <div className="profit-loss-container">
      <div className="header-section">
        <h2 className="header-title">Profit and Loss Statement</h2>
        <p className="header-subtitle">
          For the period ending {formatMonthYear(months[months.length - 1])}
        </p>
      </div>
      
      <div className="table-container">
        <table className="financial-table">
          <thead className="table-header">
            <tr>
              <th className="table-header-cell">Account</th>
              <th className="table-header-cell-amount">Amount</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {SAMPLE_DATA[months[0]].map((item, index) => (
              renderAccount(item.accounts)
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfitLossDisplay;