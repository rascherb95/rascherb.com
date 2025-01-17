import React, { useState } from "react";
import BSTransactionDetail from "./BSTransactionDetail";
import "./BalanceSheet.css";

const BalanceSheetRow = ({
  name = "",
  type = "",
  balance = null,
  indentLevel = 0,
  transactions = [], 
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatCurrency = (value) => {
    if (value === null) return "";
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
    }).format(value);
  };

  const rowClasses = [
    "bs-row",
    `bs-indent-${indentLevel}`,
    `bs-type-${type}`,
    transactions?.length > 0 && "bs-clickable",
  ]
    .filter(Boolean)
    .join(" ");

  const handleRowClick = () => {
    if (transactions?.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="bs-row-container">
      <div className={rowClasses} data-type={type} onClick={handleRowClick}>
        <div className="bs-label">{name}</div>
        {balance !== null && (
          <div
            className={`bs-amount ${balance < 0 ? "bs-negative" : ""}`}
            onClick={handleRowClick}
          >
            {formatCurrency(balance)}
          </div>
        )}
      </div>
      {isExpanded && transactions?.length > 0 && (
        <BSTransactionDetail transactions={transactions} />
      )}
    </div>
  );
};

export default BalanceSheetRow;
