/**
 * Utility functions for processing ProfitAndLossDetail JSON data
 */

export const processPLDetailData = (data) => {
    if (!data?.Rows?.Row?.[0]) {
      throw new Error('Invalid P&L detail data structure');
    }
    return processMainSection(data.Rows.Row[0]);
  };
  
  const processMainSection = (section) => {
    if (!section?.Rows?.Row) return null;
  
    const result = {
      type: 'main',
      sections: []
    };
  
    section.Rows.Row.forEach(category => {
      if (category.Header?.ColData[0]?.value) {
        const categoryData = processCategorySection(category);
        if (categoryData) {
          result.sections.push(categoryData);
        }
      }
    });

  // Add net income if available
  if (section.Summary?.ColData) {
    result.netIncome = {
      label: section.Summary.ColData[0].value,
      amount: parseFloat(section.Summary.ColData[6].value) || 0
    };
  }

  return result;
};

const processCategorySection = (category) => {
  if (!category.Header?.ColData[0]?.value) return null;

  const result = {
    type: 'category',
    label: category.Header.ColData[0].value,
    items: [],
    total: 0
  };

  if (category.Rows?.Row) {
    category.Rows.Row.forEach(item => {
      const processedItem = processDetailedItem(item);
      if (processedItem) {
        result.items.push(processedItem);
      }
    });
  }

  if (category.Summary?.ColData) {
    result.total = parseFloat(category.Summary.ColData[6].value) || 0;
  }

  return result;
};

const processDetailedItem = (item) => {
    const itemLabel = item.Header?.ColData[0]?.value || '';
    //console.log(`\nProcessing item: ${itemLabel}`);
  
    const result = {
      type: 'item',
      label: itemLabel,
      items: [],
      transactions: [],
      directAmount: 0,
      totalWithSubs: 0,
      hasDirectTransactions: false
    };
  
    // Process all rows at this level first to separate direct transactions from subcategories
    if (item.Rows?.Row) {
      let directTotal = 0;
      const directTransactions = [];
      const subcategories = [];
  
      item.Rows.Row.forEach(row => {
        if (row.type === 'Data') {
          // This is a direct transaction
          const amount = parseFloat(row.ColData[6].value) || 0;
          const transaction = {
            date: row.ColData[0].value,
            type: row.ColData[1].value,
            number: row.ColData[2].value,
            name: row.ColData[3].value,
            memo: row.ColData[4].value,
            split: row.ColData[5].value,
            amount: amount,
            balance: parseFloat(row.ColData[7].value) || 0
          };
          directTransactions.push(transaction);
          directTotal += amount;
        } else if (row.Header) {
          // This is a subcategory
          subcategories.push(row);
        } else if (row.type === 'Section' && row.Rows?.Row) {
          // Handle direct transactions within sections
          row.Rows.Row.forEach(sectionRow => {
            if (sectionRow.type === 'Data') {
              const amount = parseFloat(sectionRow.ColData[6].value) || 0;
              const transaction = {
                date: sectionRow.ColData[0].value,
                type: sectionRow.ColData[1].value,
                number: sectionRow.ColData[2].value,
                name: sectionRow.ColData[3].value,
                memo: sectionRow.ColData[4].value,
                split: sectionRow.ColData[5].value,
                amount: amount,
                balance: parseFloat(sectionRow.ColData[7].value) || 0
              };
              directTransactions.push(transaction);
              directTotal += amount;
            }
          });
        }
      });
  
      // Set direct amounts and transactions
      if (directTransactions.length > 0) {
        result.transactions = directTransactions;
        result.directAmount = directTotal;
        result.hasDirectTransactions = true;
        //console.log(`Direct amount for ${itemLabel}: ${directTotal}`);
      }
  
      // Process subcategories
      subcategories.forEach(subcategory => {
        const processedSub = processDetailedItem(subcategory);
        if (processedSub) {
          result.items.push(processedSub);
        }
      });
    }
  
    // Set total with subs
    if (item.Summary?.ColData) {
      result.totalWithSubs = parseFloat(item.Summary.ColData[6].value) || 0;
    } else {
      const subTotal = result.items.reduce((sum, subItem) => sum + (subItem.totalWithSubs || 0), 0);
      result.totalWithSubs = result.directAmount + subTotal;
    }
  
    return result;
  };

export const utils = {
  processPLDetailData
};