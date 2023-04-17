import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <section>
            <div className="center">
                <div className="choice">
                    <Link className="link" href={`/admin`}>
                        Admin
                    </Link>
                </div>
                <div className="choice" onClick={() => router.push("/login")}>
                    <Link className="link" href={`/login`}>
                        Player
                    </Link>
                </div>
            </div>
        </section>
    );
}

// changing serverless functions locations
