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
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "black",
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
          "rgba(54,162,235,1)",
          "rgba(75,192,192,1)",
          "rgba(201,203,207,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex flex-row">
      <div style={{ width: 700, marginBottom: 50 }}>
        <LineChart chartData={lineChartData} />
      </div>
      <div style={{ width: 400 }}>
        <PieChart chartData={pieChartData} />
      </div>
    </div>
  );
}

export default Graphs;
