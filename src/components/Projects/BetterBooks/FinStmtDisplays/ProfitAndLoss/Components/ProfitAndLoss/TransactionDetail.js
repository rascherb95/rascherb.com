import React from 'react';

const TransactionDetail = ({ transactions }) => {
  return (
    <div className="pl-transactions">
      {transactions.map((transaction, index) => (
        <div key={index} className="pl-transaction-row">
          <div className="pl-transaction-date">
            {transaction.date}
          </div>
          <div className="pl-transaction-memo">
            {transaction.memo}
          </div>
          <div className="pl-transaction-amount">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(transaction.amount)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionDetail;