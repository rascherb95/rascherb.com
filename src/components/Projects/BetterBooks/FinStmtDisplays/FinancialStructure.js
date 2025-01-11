import React, { useState } from 'react';

// Helper functions remain the same
const extractAccounts = (row, parentFsli = null) => {
  const result = {};
  
  const isSectionHeader = row.Header && !row.Rows;
  
  if (row.Header) {
    const headerData = row.Header.ColData;
    result.name = headerData?.[0]?.value || '';
    result.id = headerData?.[0]?.id || '';
    result.amount = headerData?.[1]?.value || '0';
    result.fsli = parentFsli;
    result.type = isSectionHeader ? 'section_header' : 'header';
    if (!isSectionHeader) {
      result.children = [];
    }
  } else if (row.ColData) {
    const colData = row.ColData;
    result.name = colData?.[0]?.value || '';
    result.id = colData?.[0]?.id || '';
    result.amount = colData?.[1]?.value || '0';
    result.fsli = parentFsli;
    result.type = row.type || 'data';
  }
  
  if (row.Rows?.Row) {
    if (!result.children) result.children = [];
    row.Rows.Row.forEach(childRow => {
      const childResult = extractAccounts(childRow, parentFsli);
      if (childResult) {
        result.children.push(childResult);
      }
    });
  }
  
  if (row.Summary) {
    const summaryData = row.Summary.ColData;
    if (summaryData?.length > 1) {
      result.summary = {
        name: summaryData[0].value,
        amount: summaryData[1].value
      };
    }
  }
  
  return result;
};

const parseLineItem = (row) => {
  const lineItem = {};
  
  if (row.Header) {
    const headerData = row.Header.ColData;
    if (headerData) {
      lineItem.category = headerData[0].value;
    }
  }
  
  if (row.group) {
    lineItem.group = row.group;
  }
  
  lineItem.type = row.type || 'Unknown';
  lineItem.accounts = extractAccounts(row, lineItem.category);
  
  return lineItem;
};

const processAccount = (account, indentLevel = 0, parentContext = "") => {
  const rows = [];
  const prefix = '    '.repeat(indentLevel);
  
  const accountName = account.name || '';
  const currentContext = parentContext ? `${parentContext}/${accountName}` : accountName;
  
  if (account.type === 'section_header') {
    rows.push({
      Account: accountName,
      Level: indentLevel,
      Type: 'section_header',
      Amount: '',
      Context: currentContext
    });
    return rows;
  }
  
  if (accountName && !accountName.startsWith('Total ')) {
    rows.push({
      Account: `${prefix}${accountName}`,
      Level: indentLevel,
      Type: account.type || 'data',
      Amount: account.amount || '0',
      Context: currentContext
    });
  }
  
  if (account.children?.length) {
    account.children.forEach(child => {
      const childRows = processAccount(child, indentLevel + 1, currentContext);
      rows.push(...childRows);
    });
  }
  
  if (account.summary) {
    const totalName = account.summary.name;
    if (!rows.some(row => row.Account.trim() === totalName)) {
      rows.push({
        Account: `${prefix}${totalName}`,
        Level: indentLevel,
        Type: 'summary',
        Amount: account.summary.amount,
        Context: `${currentContext}/${totalName}`
      });
    }
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
      <div className="p-4 text-red-600">
        Error processing data: {error}
      </div>
    );
  }

  if (!masterStructure) {
    return (
      <div className="p-4">
        Loading profit and loss statement...
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Profit and Loss</h2>
      <p className="text-gray-600 mb-4">For the period ended {
        sampleData?.Header?.EndPeriod 
          ? new Date(sampleData.Header.EndPeriod).toLocaleDateString('en-US', { 
              month: 'short',
              year: '2-digit'
            })
          : ''
      }</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left border">Account</th>
              <th className="p-2 text-right border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {masterStructure.map((row, index) => (
              <tr 
                key={index} 
                className={row.Type === 'section_header' ? 'bg-gray-50 font-bold' : 
                          row.Type === 'summary' ? 'font-semibold' : ''}
              >
                <td className="p-2 border" style={{ paddingLeft: `${row.Level * 20 + 8}px` }}>
                  {row.Account}
                </td>
                <td className="p-2 border text-right">
                  {typeof row.Amount === 'number' ? row.Amount.toFixed(2) : row.Amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfitAndLoss;