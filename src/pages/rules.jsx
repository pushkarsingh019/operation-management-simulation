import { useContext, useEffect } from "react";
import { CartContext } from "@/utils/store";
import { useRouter } from "next/router";

// importing local things
import { rules } from "@/utils/gameData";

export default function GameRules() {
    const { username } = useContext(CartContext);
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
                    <div>
                        <small>{rule.title}</small>
                        <p>{rule.rule}</p>
                    </div>
                );
            })}
            <button onClick={() => router.push("/roundOne")}>start game</button>
        </section>
    );
}
