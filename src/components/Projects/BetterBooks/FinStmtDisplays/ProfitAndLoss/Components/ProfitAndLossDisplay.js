import React, { useState } from 'react';
import './ProfitAndLossDisplay.css';

const extractAccounts = (row) => {
  const result = {};
  
  if (row.Header) {
    const headerData = row.Header.ColData;
    result.name = headerData?.[0]?.value || '';
    result.amount = headerData?.[1]?.value || '0';
    result.type = row.Rows ? 'header' : 'section_header';
    if (row.Rows) {
      result.children = [];
    }
  } else if (row.ColData) {
    result.name = row.ColData[0]?.value || '';
    result.amount = row.ColData[1]?.value || '0';
    result.type = row.type || 'data';
  }
  
  if (row.Rows?.Row) {
    if (!result.children) result.children = [];
    row.Rows.Row.forEach(childRow => {
      const childResult = extractAccounts(childRow);
      if (childResult) {
        result.children.push(childResult);
      }
    });
  }
  
  if (row.Summary) {
    result.summary = {
      name: row.Summary.ColData[0].value,
      amount: row.Summary.ColData[1].value
    };
  }
  
  return result;
};

const parseLineItem = (row) => ({
  type: row.type || 'Unknown',
  accounts: extractAccounts(row)
});

const processAccount = (account, indentLevel = 0) => {
  const rows = [];
  const prefix = '    '.repeat(indentLevel);
  const accountName = account.name || '';
  
  if (account.type === 'section_header') {
    rows.push({
      Account: accountName,
      Level: indentLevel,
      Type: 'section_header',
      Amount: ''
    });
    return rows;
  }
  
  if (accountName && !accountName.startsWith('Total ')) {
    rows.push({
      Account: `${prefix}${accountName}`,
      Level: indentLevel,
      Type: account.type || 'data',
      Amount: account.amount || '0'
    });
  }
  
  if (account.children?.length) {
    account.children.forEach(child => {
      const childRows = processAccount(child, indentLevel + 1);
      rows.push(...childRows);
    });
  }
  
  if (account.summary) {
    rows.push({
      Account: `${prefix}${account.summary.name}`,
      Level: indentLevel,
      Type: 'summary',
      Amount: account.summary.amount
    });
  }
  
  return rows;
};

const getMasterStructure = (fullPeriodData) => {
  const masterRows = [];
  
  fullPeriodData.forEach(item => {
    if (item.accounts) {
      const context = item.category || '';
      const rows = processAccount(item.accounts, 0, context);
      masterRows.push(...rows);
    }
  });
  
  return masterRows;
};

// ... (previous helper functions remain the same)

const formatCurrency = (amount, isMajorTotal = false) => {
  const num = parseFloat(amount);
  
  // Return empty string for zero values
  if (num === 0) return '';
  
  // Format the number
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Math.abs(num));  // Use absolute value since we'll handle negative signs separately
  
  // Handle negative numbers and add dollar sign if it's a major total
  const prefix = num < 0 ? '-' : '';
  return isMajorTotal ? `${prefix}${formatted}` : `${prefix}${formatted}`;
};

const ProfitAndLoss = ({ sampleData }) => {
  const [masterStructure, setMasterStructure] = useState(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
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

  const getEndPeriodMonth = () => {
    const date = new Date(sampleData?.Header?.EndPeriod);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const getMajorTotalStyle = (row) => {
    const accountLower = row.Account.toLowerCase().trim();
    return ['total income', 'total cost of goods sold', 'gross profit', 'total expenses', 'net operating income', 'net income']
      .includes(accountLower);
  };

  return (
    <div className="profit-loss-container">
      <h1 className="company-name">Sandbox Company_US_1</h1>
      <h2 className="report-title">Profit and Loss</h2>
      <p className="report-period">{getEndPeriodMonth()}</p>
      
      <table className="financial-table">
        <tbody>
          {masterStructure.map((row, index) => {
            const isTotal = row.Account.toLowerCase().includes('total');
            const isMajorTotal = getMajorTotalStyle(row);
            
            const getIndentClass = () => {
              if (row.Level === 0) return '';
              return `indent-${row.Level}`;
            };

            return (
              <tr 
                key={index} 
                className={`
                  ${isMajorTotal ? 'major-total-row' : isTotal ? 'total-row' : ''}
                  ${row.Type === 'header' ? 'section-header' : ''}
                `}
              >
                <td className={getIndentClass()}>{row.Account}</td>
                <td className="amount-cell">
                  {formatCurrency(row.Amount, isMajorTotal)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitAndLoss;