import React from "react";
import ProfitLossHeader from "./ProfitLossHeader";
import ProfitLossRow from "./ProfitLossRow";
import { processPLDetailData } from "../../utils/ProfitLossDetailUtils";
import "./ProfitAndLoss.css";

const ProfitAndLoss = ({ data }) => {
  if (!data) return <div>No data provided</div>;

  const processedData = processPLDetailData(data);
  if (!processedData) return <div>No data available</div>;

  const renderItems = (item, indentLevel) => {
    const rows = [];

    // If item has direct transactions, show it first
    if (item.directAmount !== 0) {
      rows.push(
        <ProfitLossRow
          key={`direct-${item.label}`}
          label={item.label}
          amount={item.directAmount}
          indentLevel={indentLevel}
          transactions={item.transactions}
          hasDirectTransactions={item.hasDirectTransactions}
        />
      );
    }

    // If item has subcategories
    if (item.items?.length > 0) {
      item.items.forEach((subItem) => {
        // Render the subcategory and its items
        rows.push(...renderItems(subItem, indentLevel + 1));
      });

      // Add total for main category if needed
      if (item.totalWithSubs !== item.directAmount) {
        rows.push(
          <ProfitLossRow
            key={`total-${item.label}`}
            label={item.label}
            amount={item.totalWithSubs}
            indentLevel={indentLevel}
            isTotal={true}
            isMajorTotal={indentLevel === 0}
          />
        );
      }
    }

    return rows;
  };

  return (
    <div className="pl-container">
      <ProfitLossHeader headerData={data.Header} />
      <div className="pl-content">
        {processedData.sections.map((section) => (
          <div key={section.label} className="pl-section">
            <ProfitLossRow
              label={section.label}
              amount={section.total}
              indentLevel={0}
              isCategoryHeader={true}
            />
            {section.items.map((item) => renderItems(item, 1))}
            <ProfitLossRow
              label={section.label}
              amount={section.total}
              indentLevel={0}
              isTotal={true}
              isMajorTotal={true}
            />
          </div>
        ))}
        {processedData.netIncome && (
          <ProfitLossRow
            label={processedData.netIncome.label}
            amount={processedData.netIncome.amount}
            indentLevel={0}
            isTotal={true}
            isMajorTotal={true}
          />
        )}
      </div>
    </div>
  );
};

export default ProfitAndLoss;
