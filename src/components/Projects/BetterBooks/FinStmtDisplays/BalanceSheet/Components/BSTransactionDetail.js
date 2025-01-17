import React from "react";
import "./BalanceSheet.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const TransactionDetails = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return null;
  }

  return (
    <div className="bs-transactions">
      <div className="bs-transaction-header-row">
        <div>Date</div>
        <div>Party</div>
        <div>Memo</div>
        <div>Amount</div>
        <div>Balance</div>
      </div>
      {transactions.map((transaction, index) => (
  <div key={index} className="bs-transaction-row">
    <div className="bs-transaction-date">
      {index === 0 ? "Beginning Balance" : formatDate(transaction.date)}
    </div>
    <div className="bs-transaction-name">
      {index === 0 ? "" : transaction.name}
    </div>
    <div className="bs-transaction-memo">
      {index === 0 ? "" : transaction.memo}
    </div>
    <div className="bs-transaction-amount">
      {index === 0 ? "" : transaction.amount}
    </div>
    <div className="bs-transaction-balance">
      {transaction.balance}
    </div>
  </div>
))}

    </div>
  );
};

export default TransactionDetails;
