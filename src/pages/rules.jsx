import { useContext, useEffect } from "react";
import { CartContext } from "@/utils/store";
import { useRouter } from "next/router";

// importing local things
import { rules } from "@/utils/gameData";

export default function GameRules() {
    const { username, roomName } = useContext(CartContext);
    console.log(roomName);
    const router = useRouter();

    useEffect(() => {
        if (username === "") {
            router.push("/");
        }
    }, [username, router]);
    return (
        <section>
            <h2>Hey {username}</h2>
            {rules.map((rule) => {
                return (
                    <div key={rule.title}>
                        <small>{rule.title}</small>
                        <p>{rule.rule}</p>
                    </div>
                );
            })}
            <button onClick={() => router.push(`/${roomName}/roundOne`)}>
                start game
            </button>
        </section>
    );
}
