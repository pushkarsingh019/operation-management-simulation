import axios from "axios";

export default function ChartScreen() {
    const fetchData = async () => {
        let { data } = await axios.get("/api/getData");
        console.log(data);
    };
    return (
        <section>
            <h3>chart</h3>
            <button onClick={fetchData}>fetch data</button>
        </section>
    );
}
