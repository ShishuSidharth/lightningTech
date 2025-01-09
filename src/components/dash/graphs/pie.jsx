import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, 
    CategoryScale,
    Title,
    PointElement,
    LineElement,
    Tooltip,
    LinearScale, Legend,
    plugins
 } from "chart.js/auto";
ChartJS.register(
    CategoryScale,
    Title,
    PointElement,
    LineElement,
    Tooltip,
    LinearScale, 
    Legend
);

function PieChart({ chartData }) {
    const options={
        plugins:{
        legend:{
            position:"bottom",
            labels:{
            pointStyle:'circle',
        }
        },
        title:{
            display:true,
            text:'Top Selling Items',
        }
    }
    }
  return <Doughnut options={options} data={chartData} />;
}

export default PieChart;
