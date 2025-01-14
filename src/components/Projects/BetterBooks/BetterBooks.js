import React, { useState } from "react";
import BaseProjectLayout from "../BaseProjectLayout";
import { SAMPLE_PL_DETAIL_DATA } from "./FinStmtDisplays/Data/SamplePLDetailData";
import ProfitAndLoss from "./FinStmtDisplays/ProfitAndLoss/Components/ProfitAndLoss/ProfitAndLoss";
import Dashboard from "./FinStmtDisplays/Dashboard/Components/Dashboard";
import BalanceSheet from "./FinStmtDisplays/BalanceSheet/Components/BalanceSheet";
import DisplaySelector from "./NavBarColumn/NavBarColumn";

const BetterBooks = () => {
  const [selectedView, setSelectedView] = useState("dashboard");

  const renderContent = () => {
    switch (selectedView) {
      case "dashboard":
        return <Dashboard data={SAMPLE_PL_DETAIL_DATA} />;
      case "income-statement":
        return <ProfitAndLoss data={SAMPLE_PL_DETAIL_DATA} />;
      case "balance-sheet":
        return <BalanceSheet data={SAMPLE_PL_DETAIL_DATA} />;
      default:
        return <ProfitAndLoss data={SAMPLE_PL_DETAIL_DATA} />;
    }
  };

  return (
    <BaseProjectLayout title="BetterBooks">
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <DisplaySelector
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />

        <div style={{ flex: 1, padding: "1.5rem" }}>{renderContent()}</div>
      </div>
    </BaseProjectLayout>
  );
};

export default BetterBooks;
