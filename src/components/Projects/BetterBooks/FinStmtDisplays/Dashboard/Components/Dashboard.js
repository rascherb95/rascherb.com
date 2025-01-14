import React from 'react';

const FeatureList = () => {
  const features = {
    Overall: [
      { name: 'QuickBooks integration', completed: false },
      { name: 'Other accounting integrations', completed: false },
      { name: 'Data exports', completed: false },
    ],
    Dashboard: [
      { name: 'Features list', completed: true },
      { name: 'Data Visualizations', completed: false },
      { name: 'Customized Views', completed: false },
      { name: 'More to come...', completed: false },
    ],
    IncomeStatement: [
      { name: 'Efficient Transaction Review', completed: true },
      { name: 'Custom Report Period', completed: false },
      { name: 'Multiple Months', completed: false },
      { name: 'Automatically Flag Abnormal Transactions', completed: false },
      { name: 'More to come...', completed: false },
    ],
    BalanceSheet: [
      { name: 'Efficient Transaction Review', completed: false },
      { name: 'Custom Report Period', completed: false },
      { name: 'Multiple Months', completed: false },
      { name: 'Automatically Flag Abnormal Transactions', completed: false },
      { name: 'More to come...', completed: false },
    ],
  };

  const renderFeatureList = (category, features) => {
    return (
      <div className="page-section">
        <h3 className="text-xl font-semibold mb-2">{category}</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={feature.completed}
                disabled
              />
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Feature List</h2>

      {/* Render D, Income Statement, and Balance Sheet */}
      {Object.entries(features).map(([category, featureList]) => 
        renderFeatureList(category, featureList)
      )}
    </div>
  );
};

export default FeatureList;
