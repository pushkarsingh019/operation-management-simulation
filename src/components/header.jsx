import Link from "next/link";

export default function Header() {
    return (
        <header>
            <h2>
                <Link className="link" href={"/"}>
                    Operational Efficiency Simulation
                </Link>
            </h2>
            <nav>
                <Link className="li" href={`/chart/2`}>
                    Charts - Round 2
                </Link>
                <Link className="li" href={`/chart/3`}>
                    Charts - Round 3
                </Link>
            </nav>
        </header>
    );
}
