const processBalanceSheetDetail = (data) => {
  //console.log("Processing Balance Sheet Detail", data);
  if (!data?.Rows?.Row) {
    //console.warn("No rows found in data.");
    return [];
  }
  return data.Rows.Row.map(section => processSection(section));
};

const processSection = (section) => {
  //console.log("Processing section", section);
  if (!section?.Header?.ColData) {
    //console.warn("No header data found in section.");
    return null;
  }
  const sectionName = section.Header.ColData[0]?.value || '';
  const sectionTotal = section.Summary?.ColData[1]?.value || '';
 //console.log(`Section Name: ${sectionName}, Total: ${sectionTotal}`);
  const accounts = section.Rows?.Row?.map(account => processAccount(account)) || [];
  return {
    name: sectionName,
    total: sectionTotal,
    type: 'section',
    accounts: accounts.filter(Boolean) // Remove null entries
  };
};

const processAccount = (account) => {
  //console.log("Processing account", account);
  if (!account?.Header?.ColData) {
    //console.warn("No header data found in account.");
    return null;
  }
  const header = account.Header.ColData[0] || {};
  const accountName = header.value || '';
  const accountId = header.id;
  //console.log(`Account Name: ${accountName}, ID: ${accountId}`);
  // Get the final balance from the last transaction if it exists
  let finalBalance = '';
  if (account.Rows?.Row?.length > 0) {
    // Safety check - make sure we have a valid last transaction with ColData
    const lastTransaction = account.Rows.Row[account.Rows.Row.length - 1];
    if (lastTransaction?.ColData?.[9]) {
      finalBalance = lastTransaction.ColData[9].value || '';
    }
  }
  //console.log(`Final Balance: ${finalBalance}`);
  // Check if the account has sub-accounts
  const hasSubAccounts = account.Rows?.Row?.some(row => row.Header);
  if (hasSubAccounts) {
    // Process sub-accounts
    const subAccounts = account.Rows.Row
      .map(subAccount => processAccount(subAccount))
      .filter(Boolean);
    // Calculate the total balance of sub-accounts
    const subAccountsTotal = subAccounts.reduce((sum, subAccount) => sum + parseFloat(subAccount.balance || 0), 0);
    // Compare sub-accounts total with the account's final balance
    if (accountName === "Truck" || Math.abs(subAccountsTotal - parseFloat(finalBalance)) < 0.01) {
      // If the account is "Truck" or the sub-accounts total matches the account's final balance,
      // return the account with transactions from sub-accounts
      return {
        name: accountName,
        id: accountId,
        type: 'account',
        balance: finalBalance,
        transactions: subAccounts.flatMap(subAccount => subAccount.transactions)
      };
    } else {
      // If the sub-accounts total doesn't match the account's final balance,
      // return the account with sub-accounts
      return {
        name: accountName,
        id: accountId,
        type: 'accountWithSubs',
        balance: finalBalance,
        subAccounts
      };
    }
  }
  // Process transactions
  const transactions = account.Rows?.Row
    ?.filter(row => row.type === 'Data')
    .map(transaction => processTransaction(transaction)) || [];
  return {
    name: accountName,
    id: accountId,
    type: 'account',
    balance: finalBalance,
    transactions
  };
};

const processTransaction = (transaction) => {
  //console.log("Processing transaction", transaction);
  if (!transaction?.ColData) {
    //console.warn("No column data found in transaction.");
    return null;
  }
  const cols = transaction.ColData;
  //console.log("Transaction columns", cols);
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

export {
  processBalanceSheetDetail
};