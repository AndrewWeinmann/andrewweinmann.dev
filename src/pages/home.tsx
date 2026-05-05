import { Link } from "react-router";
import Avatar from "../components/avatar.tsx";

const currently = [
	{ label: "working on", value: "building out a home server stack" },
	{ label: "developing", value: "family utilities" },
	{ label: "watching", value: "Guardians baseball" },
	{ label: "playing", value: "Diablo IV" },
	{ label: "learning", value: "AI coding techniques" },
	{ label: "enjoying outdoors", value: "disc golf" },
];

export default function Home() {
	return (
		<div className="space-y-16">
			{/* Hero */}
			<section className="flex flex-col gap-6 animate-fade-up-1">
				<Avatar src="/avatar.png" />
				<div className="border-l-2 border-accent pl-5 space-y-3">
					<h1 className="text-4xl font-bold tracking-tight cursor-blink">Andrew Weinmann</h1>
					<p className="text-text leading-relaxed max-w-prose">
						I'm a husband and dog dad, a software developer for work and fun, a warm weather outdoor
						activity enjoyer, and a sports fan — baseball generally and Cleveland in particular.
					</p>
					<p className="text-text leading-relaxed max-w-prose">
						This site is a snapshot of what I'm working on and what I actually use.
					</p>
					<p className="text-text leading-relaxed max-w-prose">
						More{" "}
						<Link to="/about" className="text-accent hover:underline">
							about me
						</Link>
						.
					</p>
				</div>
			</section>

			{/* Currently */}
			<section className="space-y-4 animate-fade-up-2">
				<h2 className="text-lg font-semibold text-heading">Currently</h2>
				<ul className="space-y-2">
					{currently.map(({ label, value }) => (
						<li key={label} className="flex gap-3 text-sm">
							<span className="text-accent select-none shrink-0">→</span>
							<span>
								<span className="text-muted">{label}:</span>{" "}
								<span className="text-text">{value}</span>
							</span>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
