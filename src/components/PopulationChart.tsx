// components/PopulationChart.tsx
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

interface PopulationCount {
  year: number;
  value: number;
}

interface Props {
  populationData: PopulationCount[];
}

const PopulationChart: React.FC<Props> = ({ populationData }) => {
  const data = {
    labels: populationData.map((item) => item.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((item) => item.value),
        fill: false,
        backgroundColor: "blue",
        borderColor: "lightblue",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default PopulationChart;
