import React, { useState } from "react";
import BalanceSheetHeader from "./BalanceSheetHeader";
import BalanceSheetRow from "./BalanceSheetRow";
import TransactionDetails from "./BSTransactionDetail";
import { processBalanceSheetDetail } from "../utils/BalanceSheetDetailUtils";
import "./BalanceSheet.css";

const BalanceSheet = ({ data }) => {
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  if (!data) return <div>No data provided</div>;

  const processedData = processBalanceSheetDetail(data) || [];
  if (!processedData) return <div>No data available</div>;

  const handleAccountClick = (accountId) => {
    setSelectedAccountId((prevAccountId) => (prevAccountId === accountId ? null : accountId));
  };

  const renderSection = (section, indentLevel = 0) => {
    if (!section) return null;

    return (
      <div key={section.name || "unnamed-section"} className="balance-sheet-section">
        <BalanceSheetRow
          name={section.name || ""}
          type="section"
          indentLevel={indentLevel}
        />
        {section.accounts?.map((account) => renderAccount(account, indentLevel + 1))}
        {section.total && (
          <BalanceSheetRow
            name={`Total ${section.name || ""}`}
            balance={section.total}
            type="total"
            indentLevel={indentLevel}
          />
        )}
      </div>
    );
  };

  const renderAccount = (account, indentLevel) => {
    if (!account) return null;

    return (
      <div key={account.id || account.name || "unnamed-account"} className="balance-sheet-account">
        <BalanceSheetRow
          name={account.name || ""}
          balance={account.balance || ""}
          type="account"
          indentLevel={indentLevel}
          onAmountClick={handleAccountClick}
          id={account.id}
        />
        {selectedAccountId === account.id && (
          <TransactionDetails transactions={account.transactions || []} />
        )}
        {account.subAccounts?.map((subAccount) => renderAccount(subAccount, indentLevel + 1))}
      </div>
    );
  };

  return (
    <div className="balance-sheet">
      <BalanceSheetHeader headerData = {data.Header} />
      <div className="balance-sheet-content">
        {processedData.map((section) => renderSection(section))}
      </div>
    </div>
  );
};

export default BalanceSheet;