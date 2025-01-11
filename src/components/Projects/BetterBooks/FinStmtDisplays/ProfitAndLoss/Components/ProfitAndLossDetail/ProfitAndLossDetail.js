import React, { useState } from 'react';
import { processPLDetail, formatCurrency } from '../../utils/ProfitLossDetailUtils';
import './ProfitAndLossDetail.css';

const CategorySection = ({ name, transactions, total }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="category-section">
      <div
        className="category-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="category-header-left">
          <span className="expand-icon">
            {isExpanded ? '▼' : '▶'}
          </span>
          <span className="category-name">
            {name} ({transactions.length})
          </span>
        </div>
        <span className="text-amount">
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
            <span className="text-amount">{formatCurrency(total)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const ProfitAndLossDetail = ({ sampleData }) => {
  const { groupedTransactions, categoryTotals } = processPLDetail(sampleData);

  return (
    <div className="pl-detail-container">
      <h2 className="section-title">Income Statement Detail</h2>
      
      <div className="pl-detail-content">
        {Object.entries(groupedTransactions)
          .filter(([category]) => !category.toLowerCase().startsWith('total'))
          .map(([category, transactions], index) => (
            <CategorySection
              key={index}
              name={category}
              transactions={transactions}
              total={categoryTotals[category]}
            />
          ))}
      </div>

      <div className="summary-section">
        <div className="summary-content">
          {Object.entries(categoryTotals)
            .filter(([category]) => category.toLowerCase().startsWith('total'))
            .map(([category, total], index) => (
              <div key={index} className={`summary-row ${category.toLowerCase().includes('net') ? 'major-total' : ''}`}>
                <span>{category}</span>
                <span className="text-amount">{formatCurrency(total)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfitAndLossDetail;