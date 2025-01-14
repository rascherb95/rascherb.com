import React from "react";
import ProfitLossHeader from "./ProfitLossHeader";
import ProfitLossRow from "./ProfitLossRow";
import { processPLDetailData } from "../../utils/ProfitLossDetailUtils";
import "./ProfitAndLoss.css";

const ProfitAndLoss = ({ data }) => {
  if (!data) return <div>No data provided</div>;

  const processedData = processPLDetailData(data);
  if (!processedData) return <div>No data available</div>;

  const renderItems = (item, level) => {
    const rows = [];

    // If item has direct transactions, show it first
    if (item.directAmount !== 0) {
      rows.push(
        <ProfitLossRow
          key={`direct-${item.label}`}
          label={item.label}
          amount={item.directAmount}
          level={level}
          transactions={item.transactions}
          hasDirectTransactions={item.hasDirectTransactions}
        />
      );
    }

    // If item has subcategories
    if (item.items?.length > 0) {
      /* UN-USED CODE FOR CATEGORY HEADERS, SAVING FOR LATER IF NEEDED

      // Add category header if not already shown as direct amount
      if (item.directAmount === 0) {
        rows.push(
          <ProfitLossRow
            key={`header-${item.label}`}
            label={item.label}
            level={level}
            isCategoryHeader={true}
          />
        );
      }

      */

      // Process each subcategory
      item.items.forEach((subItem) => {
        // Render the subcategory and its items
        rows.push(...renderItems(subItem, level + 1));
      });

      // Add total for main category if needed
      if (item.totalWithSubs !== item.directAmount) {
        rows.push(
          <ProfitLossRow
            key={`total-${item.label}`}
            label={item.label}
            amount={item.totalWithSubs}
            level={level}
            isTotal={true}
            isMajorTotal={level === 0}
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
              level={0}
              isCategoryHeader={true}
            />
            {section.items.map((item) => renderItems(item, 1))}
            <ProfitLossRow
              label={section.label}
              amount={section.total}
              level={0}
              isTotal={true}
              isMajorTotal={true}
            />
          </div>
        ))}
        {processedData.netIncome && (
          <ProfitLossRow
            label={processedData.netIncome.label}
            amount={processedData.netIncome.amount}
            level={0}
            isTotal={true}
            isMajorTotal={true}
          />
        )}
      </div>
    </div>
  );
};

export default ProfitAndLoss;
