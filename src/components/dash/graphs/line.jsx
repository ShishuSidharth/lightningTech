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
        plugins:{
          legend:{
            position:"bottom"
          }
        },
            scales: {
                x: {
                  grid: {
                    display: false, // Removes gridlines for the X-axis
                  },
                },
                y: {
                  grid: {
                    display: false, // Removes gridlines for the Y-axis
                  },
                },
            } 
            
        
    }
  return <Line options={options} data={chartData} />;
}

export default LineChart;
