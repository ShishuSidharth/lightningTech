import React from "react";
import LineChart from "./line";
import PieChart from "./pie";
import Data from "../../../assets/data.json";

function Graphs() {
  // Aggregating data for the line chart
  const aggregatedData = Data.reduce(
    (acc, data) => {
      data.supplier_records.forEach((record) => {
        const month = record.month;
        const bags = parseInt(record.bags, 10);

        acc.supplier[month] = (acc.supplier[month] || 0) + (isNaN(bags) ? 0 : bags);
      });

      data.customer_records.forEach((record) => {
        const month = record.month;
        const bags = parseInt(record.bags, 10);

        acc.customer[month] = (acc.customer[month] || 0) + (isNaN(bags) ? 0 : bags);
      });

      return acc;
    },
    { supplier: {}, customer: {} }
  );

  const labels = Object.keys(aggregatedData.supplier);
  const supplierData = Object.values(aggregatedData.supplier);
  const customerData = Object.values(aggregatedData.customer);

  // Extracting data for the pie chart (Top Selling Products)
  const topSellingProducts = Data.flatMap((data) => data.top_selling_products);

  const productAggregation = topSellingProducts.reduce((acc, product) => {
    const itemName = product.item;
    const weight = parseInt(product.weight, 10);
    acc[itemName] = (acc[itemName] || 0) + (isNaN(weight) ? 0 : weight);
    return acc;
  }, {});

  const pieLabels = Object.keys(productAggregation);
  const pieData = Object.values(productAggregation);

  // Chart.js configurations
  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Supplier Records",
        data: supplierData,
        backgroundColor: "rgba(69, 151, 234, 0.1)",
        borderColor: "black",
         // Light shading color
        fill: true,
        borderWidth: 1,
        tension: 0.2,
      },
      {
        label: "Customer Records",
        data: customerData,
        borderColor: "rgba(54,162,235,1)",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderWidth: 1,
        borderDash: [5, 5],
        tension: 0.2,
      },
    ],
  };

  const pieChartData = {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
        backgroundColor: [
          "linear-gradient(180deg, rgba(0,57,93,1) 0%, rgba(6,80,128,0.6) 100%)",

           
          "rgba(217, 242, 251, 1)",

          "rgba(226, 229, 234, 1)",

         " rgba(144, 220, 249, 1)",
          "rgba(0, 57, 93, 1)"
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex flex-row ">
      <div style={{ width: 800}}
      className="bg-white p-4 rounded-lg h-[400px]">
        <LineChart chartData={lineChartData} />
      </div>
      <div style={{ width: 400, marginLeft:20 }}
      className="bg-white p-4 rounded-lg h-[400px]">
        <PieChart chartData={pieChartData} />
      </div>
    </div>
  );
}

export default Graphs;
