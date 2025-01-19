// components/LineChart.js
import { useEffect, useState } from "react";
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
import dynamic from "next/dynamic";

interface Props {
  labels: string[];
  dataPoints: (number | null)[];
}

const LineChart = ({ labels, dataPoints }: Props) => {
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    // Register required chart components
    ChartJS.register(
      CategoryScale, // x-axis
      LinearScale, // y-axis ("linear" scale)
      PointElement, // Chart points
      LineElement, // Line rendering
      Title,
      Tooltip,
      Legend,
    );
    setChartReady(true); // Indicate registration is complete
  }, []);
  const data = {
    labels, // Days of the month
    datasets: [
      {
        // label: "Daily Trend",
        data: dataPoints, // Values for each day
        borderColor: "rgb(204, 213, 174)", // Line color
        backgroundColor: "rgba(204, 213, 174, 0.2)", // Line color
        tension: 0.4, // Smoothing for the line
        pointBackgroundColor: "rgba(137, 151, 88, 1)", // Color for points
        pointBorderColor: "rgba(137, 151, 88, 0.8)", // Border color for points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide the legend
      // title: { display: true, text: "Daily Trend for the Month" },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Weight (lbs)",
        },
      },
    },
  };

  return chartReady ? <Line data={data} options={options} /> : null;
};

export default dynamic(() => Promise.resolve(LineChart), { ssr: false });
