// Constants and helper functions stay the same
export const MAJOR_TOTAL_ROWS = [
    'Total Income',
    'Total Cost of Goods Sold',
    'Gross Profit',
    'Total Expenses',
    'Net Operating Income',
    'Net Income'
];

// Format currency values consistently
export const formatCurrency = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        return '$0.00';
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
};

// Process section and build transaction hierarchy
const processSection = (section, parentTitle = null) => {
    if (!section) return [];

    const transactions = [];
    const sectionTitle = section.Header?.ColData?.[0]?.value || '';

    // Process direct transaction data
    if (section.type === 'Data' && section.ColData) {
        transactions.push({
            date: section.ColData[0]?.value || '',
            type: section.ColData[1]?.value || '',
            docNumber: section.ColData[2]?.value || '',
            name: section.ColData[3]?.value || '',
            memo: section.ColData[4]?.value || '',
            account: section.ColData[5]?.value || '',
            amount: parseFloat(section.ColData[6]?.value || '0'),
            accountTitle: parentTitle || 'Other',
            classification: getTopLevelParent(section)
        });
    }

    // Process nested sections
    if (section.Rows?.Row) {
        const rows = Array.isArray(section.Rows.Row) ? section.Rows.Row : [section.Rows.Row];
        rows.forEach(row => {
            const childTransactions = processSection(row, sectionTitle || parentTitle);
            transactions.push(...childTransactions);
        });
    }

    return transactions;
};

// Get top-level classification (Income, COGS, Expenses)
const getTopLevelParent = (section) => {
    let current = section;
    let lastTitle = '';

    while (current) {
        const title = current.Header?.ColData?.[0]?.value || '';
        if (['Income', 'Cost of Goods Sold', 'Expenses'].includes(title)) {
            return title;
        }
        if (title) lastTitle = title;
        current = current.parent;
    }

    return lastTitle;
};

// Main processing function
export const processPLDetail = (data) => {
    if (!data) {
        return {
            groupedTransactions: {},
            categoryTotals: {},
            processed: false
        };
    }

    try {
        // Process all transactions
        const allTransactions = processSection(data);

        // Group transactions by account title and classification
        const groupedTransactions = allTransactions.reduce((acc, trans) => {
            const key = `${trans.classification}:${trans.accountTitle}`;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(trans);
            return acc;
        }, {});

        // Calculate totals for each category
        const categoryTotals = {};
        Object.entries(groupedTransactions).forEach(([key, transactions]) => {
            categoryTotals[key] = transactions.reduce((sum, t) => sum + t.amount, 0);
        });

        // Calculate major totals
        const incomeTotal = Object.entries(groupedTransactions)
            .filter(([key]) => key.startsWith('Income:'))
            .reduce((sum, [_, trans]) => 
                sum + trans.reduce((s, t) => s + t.amount, 0), 0);

        const cogsTotal = Object.entries(groupedTransactions)
            .filter(([key]) => key.startsWith('Cost of Goods Sold:'))
            .reduce((sum, [_, trans]) => 
                sum + trans.reduce((s, t) => s + t.amount, 0), 0);

        const expensesTotal = Object.entries(groupedTransactions)
            .filter(([key]) => key.startsWith('Expenses:'))
            .reduce((sum, [_, trans]) => 
                sum + trans.reduce((s, t) => s + t.amount, 0), 0);

        // Add major totals
        categoryTotals['Total Income'] = incomeTotal;
        categoryTotals['Total Cost of Goods Sold'] = cogsTotal;
        categoryTotals['Gross Profit'] = incomeTotal - cogsTotal;
        categoryTotals['Total Expenses'] = expensesTotal;
        categoryTotals['Net Income'] = incomeTotal - cogsTotal - expensesTotal;

        return {
            groupedTransactions,
            categoryTotals,
            processed: true
        };
    } catch (error) {
        console.error('Error processing P&L detail:', error);
        return {
            groupedTransactions: {},
            categoryTotals: {},
            processed: false,
            error: error.message
        };
    }
};

// Helper to get display name without classification
export const getCategoryDisplayName = (categoryKey) => {
    const parts = categoryKey.split(':');
    return parts[1] || categoryKey;
};

export default {
    processPLDetail,
    formatCurrency,
    getCategoryDisplayName
};