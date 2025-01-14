import React, { useState } from "react";
import "./ProfitAndLoss.css";

const ProfitLossRow = ({
  label = "",
  amount = null,
  level = 0,
  isTotal = false,
  isMajorTotal = false,
  transactions = [],
  hasDirectTransactions = false,
  isCategoryHeader = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasTransactions =
    hasDirectTransactions && transactions && transactions.length > 0;

  const formatCurrency = (value) => {
    if (value === null) return "";
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
    }).format(value);
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const rowClasses = [
    "pl-row",
    `pl-indent-${level}`,
    isTotal && "pl-subtotal",
    isMajorTotal && "pl-major-total",
    isCategoryHeader && "pl-category-header",
    hasTransactions && "pl-clickable",
  ]
    .filter(Boolean)
    .join(" ");

  const labelDisplay =
    isTotal && !label.startsWith("Total") ? `Total ${label}` : label;

  const amountClasses = ["pl-amount", amount < 0 && "pl-negative"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="pl-row-container">
      <div
        className={rowClasses}
        onClick={() => hasTransactions && setIsExpanded(!isExpanded)}
      >
        <div className="pl-label">{labelDisplay}</div>
        <div className={amountClasses}>{formatCurrency(amount)}</div>
      </div>

      {isExpanded && hasTransactions && (
        <div className="pl-transactions">
          {/* Transaction Detail Header Row */}
          <div className="pl-transaction-header-row">
            <div className="pl-transaction-date">Date</div>
            <div className="pl-transaction-name">Party</div>
            <div className="pl-transaction-memo">Memo</div>
            <div className="pl-amount">Amount</div>
          </div>

          {/* Transaction Rows */}
          {transactions.map((transaction, index) => (
            <div key={index} className="pl-transaction-row">
              <div className="pl-transaction-date">{formatDate(transaction.date)}</div>
              <div className="pl-transaction-name">
                {transaction.name || "-"}
              </div>
              <div className="pl-transaction-memo">
                {transaction.memo || "-"}
              </div>
              <div
                className={`pl-amount ${
                  transaction.amount < 0 ? "pl-negative" : ""
                }`}
              >
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfitLossRow;
