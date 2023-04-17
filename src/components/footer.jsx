import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <h5>operation management</h5>
            <nav className="options-flex">
                <small>
                    Engineered by{" "}
                    <Link href={`https://stoicpushkar.com`}>Pushkar Singh</Link>
                </small>
            </nav>
        </footer>
    );
}
