const processBalanceSheetDetail = (data) => {
  if (!data?.Rows?.Row) {
    return [];
  }
  // Process main sections while tracking final totals
  const sections = [];
  let finalTotalRow = null;
  let netIncomeValue = null;

  data.Rows.Row.forEach((row, index) => {
    // Store the final total row separately
    if (row.Summary?.ColData?.[0]?.value === "Total Liabilities and Equity") {
      finalTotalRow = row;
      return;
    }
    
    // Capture Net Income value from the Summary
    if (row.Summary?.ColData?.[0]?.value === "Net Income") {
      netIncomeValue = row.Summary.ColData[9]?.value || '';
    }

    const processedSection = processMainSection(row, netIncomeValue);
    if (processedSection) {
      sections.push(processedSection);
    }
  });

  // Update the Liabilities and Equity section with the correct total
  if (finalTotalRow) {
    const liabilitiesSection = sections.find(s => s.name === "LIABILITIES AND EQUITY");
    if (liabilitiesSection) {
      liabilitiesSection.total = finalTotalRow.Summary.ColData[9]?.value || '';
    }
  }

  return sections;
};

const processMainSection = (section, netIncomeValue) => {
  if (!section?.Header?.ColData) {
    return null;
  }

  const sectionName = section.Header.ColData[0]?.value || '';
  const sectionTotal = section.Summary?.ColData[9]?.value || '';
  const accounts = [];

  // Process accounts and subsections
  if (section.Rows?.Row) {
    section.Rows.Row.forEach(row => {
      if (row.Header) {
        const processedAccount = processAccount(row, netIncomeValue);
        if (processedAccount) {
          accounts.push(processedAccount);
        }
      }
    });

    // Add Net Income account to Equity section if we have the value
    if (sectionName === "LIABILITIES AND EQUITY") {
      const equityAccount = accounts.find(a => a.name === "Equity");
      if (equityAccount && netIncomeValue) {
        equityAccount.subAccounts.push({
          name: "Net Income",
          type: "account",
          balance: netIncomeValue
        });
      }
    }
  }

  return {
    name: sectionName,
    total: sectionTotal,
    type: 'section',
    accounts: accounts
  };
};

const processAccount = (account) => {
  if (!account?.Header?.ColData) {
    return null;
  }

  const header = account.Header.ColData[0] || {};
  const accountName = header.value || '';
  const accountId = header.id;

  // Handle sub-accounts (like Original Cost under Truck)
  const subAccounts = [];
  if (account.Rows?.Row) {
    account.Rows.Row.forEach(row => {
      if (row.Header) {
        const subAccount = processAccount(row);
        if (subAccount) {
          subAccounts.push(subAccount);
        }
      }
    });
  }

  // Get the final balance from the last transaction
  const transactions = account.Rows?.Row
    ?.filter(row => row.type === 'Data')
    .map(processTransaction) || [];

  let finalBalance = '';
  if (transactions.length > 0) {
    finalBalance = transactions[transactions.length - 1].balance;
  } else if (account.Rows?.Row?.[0]?.ColData?.[9]) {
    // For accounts like Truck that have their balance in the first row
    finalBalance = account.Rows.Row[0].ColData[9].value;
  }

  // If this has sub-accounts, use them
  if (subAccounts.length > 0) {
    return {
      name: accountName,
      id: accountId,
      type: 'accountWithSubs',
      balance: finalBalance,
      subAccounts,
    };
  }

  return {
    name: accountName,
    id: accountId,
    type: 'account',
    balance: finalBalance,
    transactions: transactions.length > 0 ? transactions : undefined
  };
};

const processTransaction = (transaction) => {
  if (!transaction?.ColData) {
    return null;
  }

  const cols = transaction.ColData;
  return {
    date: cols[0]?.value || '',
    transactionType: cols[1]?.value || '',
    transactionId: cols[1]?.id,
    number: cols[2]?.value || '',
    name: cols[3]?.value || '',
    nameId: cols[3]?.id,
    memo: cols[4]?.value || '',
    splitAccount: cols[5]?.value || '',
    splitAccountId: cols[5]?.id,
    debit: cols[6]?.value || '',
    credit: cols[7]?.value || '',
    amount: cols[8]?.value || '',
    balance: cols[9]?.value || ''
  };
};

export { processBalanceSheetDetail };