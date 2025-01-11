import React from 'react';
import { MAJOR_TOTAL_ROWS, formatCurrency } from '../../utils/ProfitLossUtils';

const ProfitLossRow = ({ row }) => {
  const isTotal = row.Account.toLowerCase().includes('total');
  const isMajorTotal = MAJOR_TOTAL_ROWS.includes(row.Account.toLowerCase().trim());
  
  const getIndentClass = () => {
    if (row.Level === 0) return '';
    return `indent-${row.Level}`;
  };

  return (
    <tr 
      className={`
        ${isMajorTotal ? 'major-total-row' : isTotal ? 'total-row' : ''}
        ${row.Type === 'header' ? 'section-header' : ''}
      `}
    >
      <td className={getIndentClass()}>{row.Account}</td>
      <td className="amount-cell">
        {formatCurrency(row.Amount, isMajorTotal)}
      </td>
    </tr>
  );
};

export default React.memo(ProfitLossRow);