import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <section>
            <h2>Operation Efficiency Simulation</h2>
            <div className="flex">
                <div>
                    <Link href={`/admin`}>Admin</Link>
                </div>
                <div onClick={() => router.push("/login")}>
                    <Link href={`/login`}>Player</Link>
                </div>
            </div>
        </section>
    );
}
