import React, { useState } from 'react';  // Add useState import
import { MAJOR_TOTAL_ROWS, formatCurrency } from '../../utils/ProfitLossUtils';

const ProfitLossRow = ({ row }) => {

    const [isExpanded, setIsExpanded] = useState(false);  
    const isTotal = row.Account.toLowerCase().includes('total');
    const isMajorTotal = MAJOR_TOTAL_ROWS.includes(row.Account.toLowerCase().trim());
    
    const getIndentClass = () => {
        if (row.Level === 0) return '';
        return `indent-${row.Level}`;
    };

    return (
        <>
            <tr
                className={`
                    ${isMajorTotal ? 'major-total-row' : isTotal ? 'total-row' : ''}
                    ${row.Type === 'header' ? 'section-header' : ''}
                `}
            >
                <td className={getIndentClass()}>{row.Account}</td>
                <td 
                    className="amount-cell"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {formatCurrency(row.Amount, isMajorTotal)}
                </td>
            </tr>

            {isExpanded && (
                  <tr className="expanded-content">
                      <td colSpan="2">
                          <div className="transaction-details">
                              <div className="detail-item">
                                  <span className="detail-label">Date</span>
                                  <span className="detail-value">XX/XX/XX</span>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-label">Description</span>
                                  <span className="detail-value">XX/XX/XX</span>
                              </div>
                              <div className="detail-item">
                                  <span className="detail-label">Amount</span>
                                  <span className="detail-value text-right">XX.XX</span>
                              </div>
                          </div>
                      </td>
                  </tr>
              )}
        </>
    );
};

export default React.memo(ProfitLossRow);