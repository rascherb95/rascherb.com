import React, { useState } from "react";
import PLTransactionDetail from "./PLTransactionDetail";
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
        <PLTransactionDetail transactions={transactions} />
      )}
    </div>
  );
};

export default ProfitLossRow;
