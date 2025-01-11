// Constants for major total rows identification
export const MAJOR_TOTAL_ROWS = [
    'total income',
    'total cost of goods sold',
    'gross profit',
    'total expenses',
    'net operating income',
    'net income'
  ];
  
  // Extracts structured account data from raw row data
  export const extractAccounts = (row) => {
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
  
  // Formats currency values with proper handling of zero values
  export const formatCurrency = (amount, isMajorTotal = false) => {
    const num = parseFloat(amount);
    
    if (num === 0) return '';
    
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(Math.abs(num));
    
    const prefix = num < 0 ? '-' : '';
    return isMajorTotal ? `${prefix}${formatted}` : `${prefix}${formatted}`;
  };
  
  // Processes row data into line items
  export const parseLineItem = (row) => ({
    type: row.type || 'Unknown',
    accounts: extractAccounts(row)
  });
  
  // Processes account data into display rows with proper indentation
  export const processAccount = (account, indentLevel = 0) => {
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
  
  // Creates the final data structure for display
  export const getMasterStructure = (fullPeriodData) => {
    const masterRows = [];
    
    fullPeriodData.forEach(item => {
      if (item.accounts) {
        const rows = processAccount(item.accounts, 0);
        masterRows.push(...rows);
      }
    });
    
    return masterRows;
  };