import { CartContext } from "@/utils/store";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ChartScreen() {
    const router = useRouter();
    const { roundNumber } = router.query;
    const { roomName } = useContext(CartContext);
    const fetchData = async () => {
        let { data } = await axios.post("/api/getData", {
            roundNumber,
            roomName,
        });
        console.log(data);
    };
    return (
        <section>
            <h3>chart</h3>
            <button onClick={fetchData}>fetch data</button>
        </section>
    );
}
