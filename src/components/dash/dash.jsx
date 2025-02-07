import React, { useState, useEffect } from 'react';
import Box from './box.jsx';
import Data from '../../assets/data.json';
import Graphs from './graphs/graphs.jsx';

function Dash() {
  const [month, setMonth] = useState(0); // Correct use of useState
  const [sales, setSales] = useState(() =>
    Data.reduce((sum, item) => {
      const salesValue = parseFloat(item.total_sales);
      return sum + (isNaN(salesValue) ? 0 : salesValue);
    }, 0)
  );
  const [exp, setExp] = useState(() =>
    Data.reduce((sum, item) => {
      const salesValue = parseFloat(item.total_expenses);
      return sum + (isNaN(salesValue) ? 0 : salesValue);
    }, 0)
  );
  const [np, setNp] = useState(() =>
    Data.reduce((sum, item) => {
      const salesValue = parseFloat(item.net_profit);
      return sum + (isNaN(salesValue) ? 0 : salesValue);
    }, 0)
  );
  const [dm, setDm] = useState(() =>
    Data.reduce((sum, item) => {
      const salesValue = parseFloat(item.due_amount);
      return sum + (isNaN(salesValue) ? 0 : salesValue);
    }, 0)
  );
  const [pr, setPr] = useState(() =>
    Data.reduce((sum, item) => {
      const salesValue = parseFloat(item.payment_recieved);
      return sum + (isNaN(salesValue) ? 0 : salesValue);
    }, 0)
  );
  
  

    
  return (
    <div>
      <div className="inline text-[30px] w-[80vw] text-left pl-[90px]">Overview</div>
      <div className="boxes flex flex-row p-4 justify-evenly w-[80vw]">
        {/* Make sure to properly handle `key` */}
        <Box 
          
          title="Total Sales" 
          fig={sales} // Summing the sales
          bg="rgba(217,242,251,1)"
        />
        <Box 
          
          title="Total Expenses" 
          fig={exp} // Summing the sales
          bg="rgba(226,229,234,1)"
        />
        <Box 
          
          title="Net Profit" 
          fig={np} // Summing the sales
          bg="rgba(217,242,251,1)"
        />
        <Box 
           
          title="Due Amount" 
          fig={dm} // Summing the sales
          bg="rgba(226,229,234,1)"
        />
        <Box 
           
          title="Payment Received" 
          fig={pr} // Summing the sales
          bg="rgba(217,242,251,1)"
        />
      </div>
      <Graphs  className="w-[80vw]"/>
    </div>
  );
}

export default Dash;
