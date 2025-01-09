import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, 
    CategoryScale,
    Title,
    PointElement,
    LineElement,
    Tooltip,
    LinearScale, Legend
 } from "chart.js/auto";
ChartJS.register(
    CategoryScale,
    Title,
    PointElement,
    LineElement,
    Tooltip,
    LinearScale, Legend
)
function LineChart({ chartData }) {
    const options={
        
    }
  return <Line options={options} data={chartData} />;
}

export default LineChart;
