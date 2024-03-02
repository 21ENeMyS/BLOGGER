import React, { useEffect, useState } from "react";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartBar, setChartBar] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setChartBar({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Set",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Visitors",
          data: [
            0, 100000, 80000, 60000, 110000, 40000, 11000, 10500, 15000, 50000,
            30000, 120000,
          ],
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: "rgb(0, 0, 0)",
        },
      ],
    });
  }, []);

  return (
    <div className="w-full h-full">
      <Line data={chartBar} options={chartOption} />
    </div>
  );
};

export default BarChart;
