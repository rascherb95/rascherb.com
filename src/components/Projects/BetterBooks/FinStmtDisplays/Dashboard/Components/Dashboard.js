import React from 'react';
import './Dashboard.css';

const FeatureList = () => {
  const features = {
    Financials: [
      { name: 'Income Statement', completed: true },
      { name: 'IS: Efficient Transaction Review', completed: true },
      { name: 'Balance Sheet', completed: true},
      { name: 'BS: Efficient Transaction Review', completed: true},
      { name: 'BS - Presentation & Classification Updates', completed: false, inProgress: true },
      { name: 'BS - Net Income Source Limitation', completed: false, inProgress: true },
    ],
    BackEnd: [
      { name: 'User accounts', completed: false },
      { name: 'Data imports', completed: false },
      { name: 'Data exports', completed: false },
      { name: 'Custom Report Periods', completed: false },
      { name: 'QuickBooks integration', completed: false },
    ],
    Analysis: [
      { name: 'Automatically Identify Transactions for Review', completed: false },
      { name: 'Automated KPI Analysis', completed: false },
      { name: 'Other financial KPIs', completed: false },
      { name: 'More to come...', completed: false },
    ],
    Dashboard: [
      { name: 'Data Visualizations', completed: false },
      { name: 'Custom Dashboard Components', completed: false },
    ],
  };

  const renderFeatureList = (category, features) => {
    const completedCount = features.filter(f => f.completed).length;
    const totalCount = features.length;
    const progress = Math.round((completedCount / totalCount) * 100);

    return (
      <div className="feature-card">
        <div className="feature-card-header">
          <h3 className="feature-card-title">{category}</h3>
          <span className="feature-progress-count">
            {completedCount} of {totalCount} complete
          </span>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <div className={`feature-checkbox ${feature.completed ? 'completed' : feature.inProgress ? 'in-progress' : ''}`} />
              <span className={`feature-name ${feature.completed ? 'completed' : 'pending'}`}>
                {feature.name}
              </span>
              {!feature.completed && (
                <span className="coming-soon-label">
                  {feature.inProgress ? 'In progress' : 'Coming soon'}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="feature-container">
      <div className="feature-header">
        <h2 className="feature-title">Roadmap and Planned Features</h2>
        <p className="feature-description">
          See what features are on the way! Contact me if you have any ideas.
        </p>
      </div>
      {Object.entries(features).map(([category, featureList]) => 
        renderFeatureList(category, featureList)
      )}
    </div>
  );
};

export default FeatureList;