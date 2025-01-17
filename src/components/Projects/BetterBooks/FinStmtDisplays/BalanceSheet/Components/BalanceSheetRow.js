import React from "react";
import "./BalanceSheet.css";

const BalanceSheetRow = ({
  name = "",
  type = "",
  balance = null,
  indentLevel = 0,
  onAmountClick,
  id,
}) => {
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
    onAmountClick && "bs-clickable",
  ]
    .filter(Boolean)
    .join(" ");

  const handleRowClick = () => {
    if (onAmountClick && id) {
      onAmountClick(id);
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
    </div>
  );
};

export default BalanceSheetRow;