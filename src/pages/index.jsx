import Link from "next/link";
import { useState, useContext } from "react";
import { CartContext } from "@/utils/store";
import { useRouter } from "next/router";

export default function Home() {
    const [username, setUsername] = useState("");
    const { addUsername } = useContext(CartContext);
    const router = useRouter();

    const onFormSubmit = (event) => {
        event.preventDefault();
        addUsername(username);
        router.push("/rules");
    };
    return (
        <section>
            <h2>Operational Efficiency Simulation</h2>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your username"
                    onChange={(event) => setUsername(event.target.value)}
                    required
                />
                <br />
                <button type="submit">start game</button>
            </form>
        </section>
    );
}
