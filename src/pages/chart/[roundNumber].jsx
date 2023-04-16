import axios from "axios";
import { useRouter } from "next/router";

export default function ChartScreen() {
    const router = useRouter();
    const { roundNumber } = router.query;
    const fetchData = async () => {
        let { data } = await axios.post("/api/getData", { roundNumber });
        console.log(data);
    };
    return (
        <section>
            <h3>chart</h3>
            <button onClick={fetchData}>fetch data</button>
        </section>
    );
}
