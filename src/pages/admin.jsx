import Link from "next/link";
import { useState } from "react";

export default function AdminScreen() {
    const [roomName, setRoomName] = useState("");
    const [show, setShow] = useState("");
    const origin = "https://om.stoicpushkar.com";
    // const origin = "http://localhost:3000";
    const linkGenerator = (roomName) => `${origin}/${roomName}/login`;

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setShow(linkGenerator(roomName));
    };
    return (
        <section>
            <h3>Admin Screen</h3>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    placeholder="room name"
                    value={roomName}
                    onChange={(event) => setRoomName(event.target.value)}
                    required
                />
                <br />
                <br />
                <button>Create Room</button>
            </form>
            <br />
            <Link href={show}>{show}</Link>
        </section>
    );
}
