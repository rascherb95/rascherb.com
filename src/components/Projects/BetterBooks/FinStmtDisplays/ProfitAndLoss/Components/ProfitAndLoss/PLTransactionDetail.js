import React from "react";
import "./ProfitAndLoss.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const PLTransactionDetail = ({ transactions = [] }) => {
  return (
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
          <div className="pl-transaction-date">
            {formatDate(transaction.date)}
          </div>
          <div className="pl-transaction-name">{transaction.name || "-"}</div>
          <div className="pl-transaction-memo">{transaction.memo || "-"}</div>
          <div
            className={`pl-amount ${
              transaction.amount < 0 ? "pl-negative" : ""
            }`}
          >
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PLTransactionDetail;
