// Constants for identifying special rows
export const MAJOR_TOTAL_ROWS = [
    'total income',
    'total cost of goods sold',
    'gross profit',
    'total expenses',
    'net operating income',
    'net income'
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

// Calculate total for a section's transactions
const calculateSectionTransactionsTotal = (rows) => {
    if (!Array.isArray(rows)) return 0;
    
    return rows.reduce((total, row) => {
        if (row.type === 'Data' && row.ColData) {
            const amount = parseFloat(row.ColData[6]?.value || '0');
            return total + amount;
        }
        if (row.Rows?.Row) {
            return total + calculateSectionTransactionsTotal(row.Rows.Row);
        }
        return total;
    }, 0);
};

// Update totals for a section and its totals row
const updateSectionTotals = (section) => {
    if (!section?.Rows?.Row) return;

    // Calculate total from actual transactions
    const total = calculateSectionTransactionsTotal(section.Rows.Row);

    // Update the section header amount
    if (section.ColData?.[1]) {
        section.ColData[1].value = formatCurrency(total);
    }

    // Find and update the total row if it exists
    const totalRow = section.Rows.Row.find(row => 
        row.type === 'Total' && 
        row.ColData?.[0]?.value?.toLowerCase().startsWith('total for')
    );
    if (totalRow?.ColData?.[1]) {
        totalRow.ColData[1].value = formatCurrency(total);
    }

    return total;
};

// Process a section recursively
export const processSection = (section, path = [], parentSection = null) => {
    const transactions = [];
    
    if (!section) return transactions;

    // Store reference to parent for total calculations
    section.parent = parentSection;

    // Process Data rows
    if (section.type === 'Data' && section.ColData) {
        const amount = parseFloat(section.ColData[6]?.value || '0');
        transactions.push({
            path,
            date: section.ColData[0]?.value,
            type: section.ColData[1]?.value || '',
            number: section.ColData[2]?.value,
            name: section.ColData[3]?.value,
            memo: section.ColData[4]?.value,
            split: section.ColData[5]?.value,
            amount,
            balance: parseFloat(section.ColData[7]?.value || '0')
        });
    }

    // Process nested sections
    if (section.Rows?.Row) {
        // Get section name for path
        const sectionName = section.ColData?.[0]?.value || section.Header?.ColData?.[0]?.value || '';
        const newPath = sectionName ? [...path, sectionName] : path;
        
        // Process each row
        section.Rows.Row.forEach(row => {
            const subTransactions = processSection(row, newPath, section);
            transactions.push(...subTransactions);
        });

        // After processing all rows, update section totals
        if (section.type === 'Header') {
            updateSectionTotals(section);
        }
    }

    return transactions;
};

// Process the entire P&L detail data
export const processPLDetail = (data) => {
    if (!data) {
        return {
            transactions: [],
            groupedTransactions: {},
            categoryTotals: {},
            processed: false
        };
    }

    try {
        // Process sections and collect transactions
        const transactions = [];
        
        if (data.Rows?.Row) {
            data.Rows.Row.forEach(section => {
                const sectionTransactions = processSection(section, [], data);
                transactions.push(...sectionTransactions);
            });
        }

        // Group transactions and calculate totals
        const groupedTransactions = groupTransactions(transactions);
        const categoryTotals = calculateCategoryTotals(groupedTransactions);

        return {
            transactions,
            groupedTransactions,
            categoryTotals,
            processed: true
        };
    } catch (error) {
        console.error('Error processing P&L detail:', error);
        return {
            transactions: [],
            groupedTransactions: {},
            categoryTotals: {},
            processed: false,
            error: error.message
        };
    }
};

// Group transactions by category and type
export const groupTransactions = (transactions) => {
    if (!Array.isArray(transactions)) return {};
    
    return transactions.reduce((acc, trans) => {
        if (!trans?.path?.length) return acc;
        const category = trans.path[trans.path.length - 1];
        const type = (trans.type || '').toLowerCase();
        const key = `${category}:${type}`;
        
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(trans);
        return acc;
    }, {});
};

// Calculate category totals
export const calculateCategoryTotals = (groupedTransactions) => {
    if (!groupedTransactions || typeof groupedTransactions !== 'object') {
        return {};
    }

    const totals = {};
    
    Object.entries(groupedTransactions).forEach(([key, transactions]) => {
        if (!Array.isArray(transactions)) return;
        
        const [category] = (key || '').split(':');
        if (!category) return;
        
        if (!totals[category]) {
            totals[category] = { income: 0, expense: 0 };
        }
        
        const sectionTotal = transactions.reduce((sum, t) => {
            if (!t || typeof t.amount === 'undefined') return sum;
            return sum + Math.abs(parseFloat(t.amount) || 0);
        }, 0);

        // Determine if this is income or expense based on the path
        const isIncome = transactions.some(t => 
            t.path.some(p => p.toLowerCase().includes('income')) ||
            (t.type || '').toLowerCase().includes('invoice')
        );
        
        totals[category][isIncome ? 'income' : 'expense'] = sectionTotal;
    });
    
    return totals;
};

// Helper functions
export const getTransactionPath = (transaction) => {
    return transaction?.path?.join(' > ') || '';
};

export const filterTransactionsByCategory = (transactions, category, type = null) => {
    if (!Array.isArray(transactions)) return [];
    
    return transactions.filter(t => {
        const matchesCategory = t?.path?.includes(category);
        if (!type) return matchesCategory;
        return matchesCategory && (t.type || '').toLowerCase() === type.toLowerCase();
    });
};

export const sortTransactionsByDate = (transactions) => {
    if (!Array.isArray(transactions)) return [];
    
    return [...transactions].sort((a, b) => {
        const dateA = new Date(a?.date || '');
        const dateB = new Date(b?.date || '');
        return dateA - dateB;
    });
};

export const isTotalRow = (name) => {
    return name && name.toLowerCase().startsWith('total for');
};

export const isMajorTotalRow = (name) => {
    return name && MAJOR_TOTAL_ROWS.includes(name.toLowerCase());
};

export default {
    processSection,
    groupTransactions,
    calculateCategoryTotals,
    formatCurrency,
    getTransactionPath,
    processPLDetail,
    filterTransactionsByCategory,
    sortTransactionsByDate,
    isTotalRow,
    isMajorTotalRow
};