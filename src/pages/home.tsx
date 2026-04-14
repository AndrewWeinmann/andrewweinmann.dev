import Avatar from "../components/avatar.tsx";

export default function Home() {
	return (
		<div className="space-y-16">
			{/* Hero */}
			<section className="flex flex-col gap-6">
				<Avatar src="/avatar.png" />
				<div className="space-y-2">
					<h1 className="text-4xl font-bold tracking-tight">Andrew Weinmann</h1>
					<p className="text-muted text-sm font-mono">Software Engineer at Epic</p>
				</div>
				<p className="text-text leading-relaxed max-w-prose">
					I write software for a living, and also for fun, which probably tells you something.
					Outside of work I&rsquo;m into disc golf, optimizing factory layouts in Factorio, and
					watching Cleveland sports teams find new ways to disappoint me.
				</p>
			</section>

			{/* What I'm Building */}
			<section className="space-y-3">
				<h2 className="text-lg font-semibold text-heading">What I&rsquo;m Building</h2>
				<p className="text-text leading-relaxed">
					A handful of tools and apps are in progress across subdomains. Nothing worth linking yet.
				</p>
			</section>
		</div>
	);
}
