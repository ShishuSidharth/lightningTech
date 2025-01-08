import React, { useState, useEffect } from 'react';
import Box from './box.jsx';
import Data from '../../assets/data.json';

function Dash() {
  const [month, setMonth] = useState(0); // Correct use of useState
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const filteredSales = Data.filter(entry => {
      const entryMonth = new Date(entry.date.split("-").reverse().join("-")).getMonth();
      return entryMonth === month;
    }).map(entry => {
      // Convert sales from string to number
      return parseFloat(entry.total_sales.replace(/,/g, ''));
    });

    setSales(filteredSales);
  }, [month]); // Re-run the effect when `month` changes

  return (
    <div>
      <div className="text-[30px]">Overview</div>
      <div className="boxes">
        {/* Make sure to properly handle `key` */}
        <Box 
          key="total-sales-box" 
          title="Total Sales" 
          fig={sales.reduce((total, num) => total + num, 0)} // Summing the sales
        />
      </div>
    </div>
  );
}

export default Dash;
