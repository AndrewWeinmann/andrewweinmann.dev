import ExternalLink from "../components/external-link.tsx";

interface UsesItem {
	name: string;
	description?: string;
	href?: string;
}

interface UsesSectionProps {
	title: string;
	items: UsesItem[];
}

function UsesSection({ title, items }: UsesSectionProps) {
	return (
		<section className="space-y-4">
			<h2 className="text-lg font-semibold text-heading">{title}</h2>
			<ul className="space-y-3">
				{items.map((item) => (
					<li key={item.name} className="border border-border rounded-md p-4 bg-surface">
						{item.href ? (
							<ExternalLink
								href={item.href}
								className="font-medium text-heading hover:text-accent transition-colors"
							>
								{item.name}
							</ExternalLink>
						) : (
							<span className="font-medium text-heading">{item.name}</span>
						)}
						{item.description && <p className="mt-1 text-sm text-muted">{item.description}</p>}
					</li>
				))}
			</ul>
		</section>
	);
}

// TODO: Andrew — replace all placeholder items with your actual setup

const hardware: UsesItem[] = [
	{ name: "Laptop", description: "TODO: fill in" },
	{ name: "Keyboard", description: "TODO: fill in" },
	{ name: "Monitor", description: "TODO: fill in" },
];

const devTools: UsesItem[] = [
	{ name: "Editor", description: "TODO: fill in" },
	{ name: "Terminal", description: "TODO: fill in" },
	{ name: "Shell", description: "TODO: fill in" },
];

const services: UsesItem[] = [{ name: "Service / app", description: "TODO: fill in" }];

export default function Uses() {
	return (
		<div className="space-y-12">
			<h1 className="text-4xl font-bold tracking-tight">Uses</h1>
			<UsesSection title="Hardware" items={hardware} />
			<UsesSection title="Development Tools" items={devTools} />
			<UsesSection title="Services &amp; Apps" items={services} />
		</div>
	);
}
