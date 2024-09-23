// src/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Overall User Activity",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false, // No area fill under the line
      borderColor: "rgb(75, 192, 192)", // Line color
      tension: 0.1, // Make the line slightly curved
      pointStyle: 'circle', // Can be 'circle', 'rect', 'rectRounded', etc.
      pointRadius: 5, // Size of the points
      pointHoverRadius: 8, // Size of the point when hovered
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle, // Dynamically set chart title based on pointStyle
    },
  },
  scales: {
    y: {
      beginAtZero: true, // Ensure y-axis starts at 0
    },
  },
};

const LineChart = () => {
  return (
    <>
      <h2 className="text-[2rem] text-center font-semibold">User Activity Chart</h2>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
