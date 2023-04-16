import Link from "next/link";
import { useState, useContext } from "react";
import { CartContext } from "@/utils/store";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const { addUsername, addRoomName } = useContext(CartContext);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addUsername(username);
        addRoomName(roomName);
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
                    value={username}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="room name"
                    onChange={(event) => setRoomName(event.target.value)}
                    value={roomName}
                    required
                />
                <br />
                <button type="submit">start game</button>
            </form>
        </section>
    );
}
