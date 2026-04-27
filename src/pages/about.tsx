import ExternalLink from "../components/external-link.tsx";

export default function About() {
	return (
		<div className="space-y-12">
			<h1 className="text-4xl font-bold tracking-tight">Who I Am</h1>

			<section className="space-y-4">
				<h2 className="text-xl font-semibold text-heading">Background</h2>
				<p className="text-text">
					I am a professional software developer in Wisconsin, where I have been with{" "}
					<ExternalLink href="https://www.epic.com" className="text-accent hover:underline">
						Epic
					</ExternalLink>{" "}
					since 2011, and I still enjoy creating things with software in my free time.
				</p>
				<p className="text-text">
					I like building practical tools for myself, experimenting with small side projects, and
					refining the way I work. I'm often iterating on ideas and trying out new ones.
				</p>
				<p className="text-text">
					I was first attracted to software by the mix of problem solving and building something
					concrete, along with the logical thinking it requires. That has stayed consistent from my
					first scripts to full applications.
				</p>
			</section>

			<section className="space-y-4">
				<h2 className="text-xl font-semibold text-heading">Interests</h2>
				<ul className="space-y-2 text-text">
					<li>
						<span className="text-text font-semibold">Baseball</span> — I played my entire childhood
						and continue to follow the sport. I still play softball and have seen the Guardians play
						at 21 different stadiums.
					</li>
					<li>
						<span className="text-text font-semibold">Board games</span> — Generally medium
						complexity ones, especially strategy and sci-fi ones that replay well with friends.
					</li>
					<li>
						<span className="text-text font-semibold">Disc golf</span> — Competitive enough to keep
						score, relaxed enough to still enjoy it. Discs have some amazing artwork, and it's a
						great way to get outside with friends.
					</li>
					<li>
						<span className="text-text font-semibold">Music</span> — Not playing it, mind you.
						That's not a talent I possess, but I listen to it near constantly and enjoy live shows.
						Taste spans largely rock and metal, but some punk, rap, and electronic music as well.
					</li>
					<li>
						<span className="text-text font-semibold">Sports</span> — I'm from Cleveland and went to
						Ohio State, which shapes my fandom across baseball, basketball, and football.
					</li>
					<li>
						<span className="text-text font-semibold">Video games</span> — Generally strategy,
						factory, sports, and simulation games. I really enjoy ones with systems to optimize -
						Factorio is my all-time favorite.
					</li>
				</ul>
			</section>
		</div>
	);
}
