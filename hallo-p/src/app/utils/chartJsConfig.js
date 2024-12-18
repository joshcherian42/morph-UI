import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

// Safely register Chart.js elements
export const registerChartJs = () => {
  if (typeof window !== "undefined" && !ChartJS.registered) {
    console.log("hi");
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      Title,
      Tooltip,
      Legend,
      zoomPlugin,
    );
    ChartJS.registered = true; // Mark registration complete to avoid duplicates
  }
};
