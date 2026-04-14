export default function About() {
	return (
		<div className="space-y-12">
			<h1 className="text-4xl font-bold tracking-tight">About</h1>

			{/* Extended bio */}
			<section className="space-y-4">
				<h2 className="text-lg font-semibold text-heading">Bio</h2>
				{/* TODO: Andrew — write extended bio here. A few paragraphs about who you are. */}
				<p className="text-muted italic text-sm">[Bio placeholder — fill this in]</p>
			</section>

			{/* Interests */}
			<section className="space-y-4">
				<h2 className="text-lg font-semibold text-heading">Interests</h2>
				<ul className="space-y-2 text-text">
					{/* TODO: Andrew — expand these with descriptions or remove/replace */}
					<li>Disc golf</li>
					<li>Factorio</li>
					<li>Cleveland sports</li>
				</ul>
			</section>

			{/* Background — optional, Andrew's call */}
			{/*
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-heading">Background</h2>
        TODO: Andrew — where you're from, how you got into software, etc.
        Delete this section if you don't want it.
      </section>
      */}
		</div>
	);
}
