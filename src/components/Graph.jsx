import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";


ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
);


const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
        {
            label: "",
            data: [400, 40, 205, 20, 150, 300, 100],
            borderColor: "#00c896",
            backgroundColor: "#00c896",
            tension: 0.2,
            borderWidth: 2,
            fill: true,
        },
    ],
};


// Chart options
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false, // Disable the legend
        },
    },
    scales: {
        x: {
            grid: {
                display: true,
                color: "rgba(200, 200, 200, 0.1)",
            },
        },
        y: {
            grid: {
                display: true,
                color: "rgba(200, 200, 200, 0.1)",
            },
            ticks: {
                display: false,
            }
        },
    },
};






const Graph = () => {
    return (
        <div className='w-full h-[100px] sm:h-[200px] '>
            <Line data={data} options={options} />
        </div>
    )
}
export default Graph