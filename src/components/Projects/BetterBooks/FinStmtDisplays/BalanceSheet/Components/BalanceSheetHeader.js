import React from "react";

const BalanceSheetHeader = ({ headerData }) => {
  if (!headerData) {
    return null;
  }
  const formatDate = (dateString) => {
    // Parse the date string in ISO format, was previously incorrect due to timezone differences
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Month is zero-indexed in JS Date
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mb-6 border-b pb-4">
      <h1 className="text-2xl font-bold mb-2">
        {headerData.ReportName || "Income Statement"}
      </h1>
      <div className="text-gray-600">
        <p className="mb-1">
          {headerData.ReportBasis} basis as of {" "}
          {formatDate(headerData.EndPeriod)}
        </p>
      </div>
    </div>
  );
};

export default BalanceSheetHeader;
