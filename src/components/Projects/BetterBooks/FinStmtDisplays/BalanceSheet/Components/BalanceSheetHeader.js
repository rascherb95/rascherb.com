import React from "react";

const BalanceSheetHeader = ({ headerData }) => {
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
    <div className="balance-sheet-header">
      <h1>{headerData.ReportName || "Balance Sheet"}</h1>
      <div className="bs-header-subtitle">
        <div>
          <p>
            {headerData.ReportBasis} basis as of{" "}
            {formatDate(headerData.EndPeriod)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheetHeader;
