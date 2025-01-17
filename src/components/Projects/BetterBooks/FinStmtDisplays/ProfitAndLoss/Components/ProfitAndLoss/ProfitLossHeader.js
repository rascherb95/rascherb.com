import React from "react";
import "./ProfitAndLoss.css";

const ProfitLossHeader = ({ headerData }) => {
  if (!headerData) {
    return null;
  }

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="pl-header">
      <h1>{headerData.ReportName || "Income Statement"}</h1>
      <div className="pl-header-subtitle">
        <p>
          {headerData.ReportBasis} basis for{" "}
          {formatDate(headerData.StartPeriod)} -{" "}
          {formatDate(headerData.EndPeriod)}
        </p>
      </div>
    </div>
  );
};

export default ProfitLossHeader;