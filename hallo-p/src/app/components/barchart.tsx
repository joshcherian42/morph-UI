import React, { useState, useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { registerChartJs } from "../utils/chartJsConfig";
import { addDays, subDays, format } from "date-fns";

const BarChart = () => {
  const chartRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [visibleRange, setVisibleRange] = useState({
    startDate: subDays(new Date(), 3),
    endDate: addDays(new Date(), 3),
  });

  const dataPoints = {
    "2024-12-11": { morning: 60, midday: 80, evening: 55 },
    "2024-12-12": { morning: 62, midday: 82, evening: 58 },
    "2024-12-13": { morning: 65, midday: 85, evening: 62 },
    "2024-12-14": { morning: 68, midday: 83, evening: 60 },
    "2024-12-15": { morning: 64, midday: 84, evening: 57 },
    "2024-12-16": { morning: 63, midday: 86, evening: 59 },
    "2024-12-17": { morning: 67, midday: 85, evening: 63 },
    "2024-12-18": { morning: 70, midday: 88, evening: 67 },
    "2024-12-19": { morning: 73, midday: 90, evening: 70 },
    "2024-12-20": { morning: 73, midday: 90, evening: 70 },
    "2024-12-21": { morning: 73, midday: 90, evening: 70 },
    "2024-12-22": { morning: 73, midday: 90, evening: 70 },
    "2024-12-23": { morning: 73, midday: 90, evening: 70 },
  };

  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    // Register required chart components
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
      zoomPlugin,
    );
    setChartReady(true); // Indicate registration is complete
  }, []);

  const createLabelsForRange = (start, end) => {
    const labels = [];
    let current = new Date(start);
    while (current <= end) {
      labels.push(format(current, "yyyy-MM-dd"));
      current = addDays(current, 1);
    }
    return labels;
  };

  const buildChartData = (labels, data, visibleRange) => {
    const { startDate, endDate } = visibleRange;
    console.log(currentDate);
    return {
      labels,
      datasets: [
        {
          label: "Morning",
          backgroundColor: labels.map(
            (label) =>
              new Date(label).getUTCDate() == new Date(currentDate).getUTCDate()
                ? "rgba(239, 244, 221, 0.7)" // Within range
                : "rgba(239, 244, 221, 0.2)", // Outside range (faded)
          ),
          data: labels.map((label) =>
            data[label] ? data[label].morning : null,
          ),
        },
        {
          label: "Midday",
          backgroundColor: labels.map((label) =>
            new Date(label).getUTCDate() == new Date(currentDate).getUTCDate()
              ? "rgba(204, 213, 174, 0.7)"
              : "rgba(204, 213, 174, 0.2)",
          ),
          data: labels.map((label) =>
            data[label] ? data[label].midday : null,
          ),
        },
        {
          label: "Evening",
          backgroundColor: labels.map((label) =>
            new Date(label).getUTCDate() == new Date(currentDate).getUTCDate()
              ? "rgba(137, 151, 88, 0.7)"
              : "rgba(137, 151, 88, 0.2)",
          ),
          data: labels.map((label) =>
            data[label] ? data[label].evening : null,
          ),
        },
      ],
    };
  };

  const labels = createLabelsForRange(
    subDays(new Date("2024-12-11"), 30),
    addDays(new Date("2024-12-23"), 30),
  );

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
          onPanComplete: ({ chart }) => {
            const xScale = chart.scales.x;
            const minIndex = Math.round(xScale.min);
            const maxIndex = Math.round(xScale.max);

            const newStartDate = new Date(labels[minIndex]);
            const newEndDate = new Date(labels[maxIndex]);

            setVisibleRange({ startDate: newStartDate, endDate: newEndDate });

            const middleIndex = Math.floor((minIndex + maxIndex) / 2);
            setCurrentDate(labels[middleIndex]);
          },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: { autoSkip: false },
        min: labels.findIndex(
          (date) =>
            format(new Date(date), "yyyy-MM-dd") ===
            format(visibleRange.startDate, "yyyy-MM-dd"),
        ),
        max: labels.findIndex(
          (date) =>
            format(new Date(date), "yyyy-MM-dd") ===
            format(visibleRange.endDate, "yyyy-MM-dd"),
        ),
      },
      y: {
        title: { display: true, text: "Weight (lbs)" },
      },
    },
  };

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = chartRef.current;
    const xScale = chart.scales.x;

    xScale.min = labels.findIndex(
      (date) =>
        format(new Date(date), "yyyy-MM-dd") ===
        format(visibleRange.startDate, "yyyy-MM-dd"),
    );
    xScale.max = labels.findIndex(
      (date) =>
        format(new Date(date), "yyyy-MM-dd") ===
        format(visibleRange.endDate, "yyyy-MM-dd"),
    );

    chart.update();
  }, [visibleRange]);

  return chartReady ? (
    <Bar
      ref={chartRef}
      data={buildChartData(labels, dataPoints, visibleRange)}
      options={options}
    />
  ) : null;
};

export default BarChart;
