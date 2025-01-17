import React from "react";
import BalanceSheetHeader from "./BalanceSheetHeader";
import BalanceSheetRow from "./BalanceSheetRow";
import { processBalanceSheetDetail } from "../utils/BalanceSheetDetailUtils";
import "./BalanceSheet.css";

const BalanceSheet = ({ data }) => {
  if (!data) return <div>No data provided</div>;

  const processedData = processBalanceSheetDetail(data) || [];
  if (!processedData) return <div>No data available</div>;

  const renderSection = (section, indentLevel = 0) => {
    if (!section) return null;

    return (
      <div
        key={section.name || "unnamed-section"}
        className="balance-sheet-section"
      >
        <BalanceSheetRow
          name={section.name || ""}
          type="section"
          indentLevel={indentLevel}
        />
        {section.accounts?.map((account) =>
          renderAccount(account, indentLevel + 1)
        )}
        {section.total && (
          <BalanceSheetRow
            name={`Total ${section.name || ""}`}
            balance={section.total} // Use the pre-calculated total
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
      <div
        key={account.id || account.name || "unnamed-account"}
        className="balance-sheet-account"
      >
        <BalanceSheetRow
          name={account.name || ""}
          balance={account.balance || ""}
          type="account"
          indentLevel={indentLevel}
          id={account.id}
          transactions={account.transactions || []}
        />
        {account.subAccounts?.map((subAccount) =>
          renderAccount(subAccount, indentLevel + 1)
        )}
      </div>
    );
  };

  return (
    <div className="balance-sheet">
      <BalanceSheetHeader headerData={data.Header} />
      <div className="balance-sheet-content">
        {processedData.map((section) => renderSection(section))}
      </div>
    </div>
  );
};

export default BalanceSheet;
