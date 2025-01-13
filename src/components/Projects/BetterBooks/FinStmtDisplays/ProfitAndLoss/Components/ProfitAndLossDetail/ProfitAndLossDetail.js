import React, { useState } from 'react';
import { processPLDetail, formatCurrency, getCategoryDisplayName } from '../../utils/ProfitLossDetailUtils';
import './ProfitAndLossDetail.css';

const CategorySection = ({ categoryKey, transactions, total }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const name = getCategoryDisplayName(categoryKey);

    return (
        <div className="category-section">
            <div className="category-header" >
                <div className="category-header-left">
                    <span className="category-name">
                        {name} 
                    </span>
                </div>
                <span className={`text-amount ${total < 0 ? 'text-negative' : 'text-positive'}`} onClick={() => setIsExpanded(!isExpanded)}>
                    {formatCurrency(total)}
                </span>
            </div>
            {isExpanded && (
                <div className="transaction-list">
                    {transactions.map((transaction, index) => (
                        <div key={index} className="transaction-item">
                            <div className="transaction-header">
                                <span className="transaction-date">{transaction.date}</span>
                                <span className={`transaction-amount ${transaction.amount < 0 ? 'text-negative' : 'text-positive'}`}>
                                    {formatCurrency(transaction.amount)}
                                </span>
                            </div>
                            <div className="transaction-name">{transaction.name}</div>
                            {transaction.memo && (
                                <div className="transaction-memo">{transaction.memo}</div>
                            )}
                        </div>
                    ))}
                    <div className="category-total">
                        <span>Total for {name}</span>
                        <span className={`text-amount ${total < 0 ? 'text-negative' : 'text-positive'}`}>
                            {formatCurrency(total)}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProfitAndLossDetail = ({ sampleData }) => {
    const { groupedTransactions, categoryTotals } = processPLDetail(sampleData);

    const sections = Object.entries(groupedTransactions)
        .filter(([categoryKey]) => !categoryKey.toLowerCase().includes('total'))
        .reduce((acc, [categoryKey, transactions]) => {
            const [classification] = categoryKey.split(':');
            if (!acc[classification]) {
                acc[classification] = [];
            }
            acc[classification].push([categoryKey, transactions]);
            return acc;
        }, {});

    return (
        <div className="pl-detail-container">
            <h2 className="section-title">Income Statement Detail</h2>
            <div className="pl-detail-content">
                {Object.entries(sections).map(([classification, categoryGroups]) => (
                    <div key={classification} className="classification-group">
                        <h3 className="classification-title">{classification}</h3>
                        {categoryGroups.map(([categoryKey, transactions], index) => (
                            <CategorySection
                                key={`${categoryKey}-${index}`}
                                categoryKey={categoryKey}
                                transactions={transactions}
                                total={categoryTotals[categoryKey]}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="summary-section">
                <div className="summary-content">
                    {Object.entries(categoryTotals)
                        .filter(([category]) => 
                            category.toLowerCase().startsWith('total') || 
                            category.toLowerCase().includes('gross') ||
                            category.toLowerCase().includes('net'))
                        .map(([category, total], index) => (
                            <div 
                                key={index} 
                                className={`summary-row ${(category.toLowerCase().includes('net') || 
                                                         category.toLowerCase().includes('gross')) 
                                                         ? 'major-total' : ''}`}
                            >
                                <span>{category}</span>
                                <span className={`text-amount ${total < 0 ? 'text-negative' : 'text-positive'}`}>
                                    {formatCurrency(total)}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ProfitAndLossDetail;