import { CartContext } from "@/utils/store";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
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
import Link from "next/link";

export default function ChartScreen() {
    const router = useRouter();
    const { roundNumber } = router.query;
    const { roomName } = useContext(CartContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Which player had the highest net value",
            },
        },
    };

    const chartData = {
        labels: data.map(({ username }) => username),
        datasets: [
            {
                label: "Net Value",
                data: data.map(({ netValue }) => netValue),
                backgroundColor: "rgb(255, 93, 93)",
            },
        ],
    };

    const fetchData = async () => {
        setIsLoading(true);
        let { data } = await axios.post("/api/getData", {
            roundNumber,
            roomName,
        });
        setData(data);
        console.log(data);
        setIsLoading(false);
    };

    const getHighest = (data) =>
        data.reduce(
            (acc, choice) =>
                choice.netValue > acc.netValue ? (acc = choice) : acc,
            data[0]
        );

    const getWinner = ({ username, netValue }) =>
        `${username} wins this round with a net value of ${netValue}`;

    return (
        <section className="screen">
            <br />
            <div className="flex">
                <h3>Chart</h3>
                <div className="options-flex">
                    <Link
                        className="link"
                        href={
                            roundNumber == 2
                                ? `/${roomName}/roundThree`
                                : `/end`
                        }
                    >
                        Next
                    </Link>
                    <p className="third-button" onClick={fetchData}>
                        {"   "}refresh
                    </p>
                </div>
            </div>
            <br />
            <br />
            <p className="center-text">
                {isLoading
                    ? ""
                    : data.length === 0
                    ? ""
                    : getWinner(getHighest(data))}
            </p>
            <br />
            <br />
            {isLoading ? (
                "loading...."
            ) : data.length === 0 ? (
                <p>no data available</p>
            ) : (
                <Bar className="bar-chart" options={options} data={chartData} />
            )}
        </section>
    );
}
