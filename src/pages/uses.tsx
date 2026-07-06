import ExternalLink from "../components/external-link.tsx";

// cspell:ignore Lemokey ultrawide Arctis Bitwarden Jellyfin

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
		<section className="space-y-3">
			<h2 className="text-lg font-semibold text-heading">{title}</h2>
			<ul className="border-l border-border space-y-3 pl-4">
				{items.map((item) => (
					<li key={item.name} className="flex gap-2 text-sm">
						<span className="text-accent select-none shrink-0">›</span>
						<span>
							{item.href ? (
								<ExternalLink
									href={item.href}
									className="font-medium text-accent hover:text-accent-hover transition-colors"
								>
									{item.name}
								</ExternalLink>
							) : (
								<span className="font-medium text-heading">{item.name}</span>
							)}
							{item.description && <span className="text-muted"> — {item.description}</span>}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}

const hardware: UsesItem[] = [
	{
		name: "Desktop",
		description:
			"Self-built desktop for dev and gaming, with an AMD Ryzen 7 7800X3D, RTX 4080 Super, NVME SSD, and 64GB RAM.",
	},
	{
		name: "Laptop",
		description: "Framework Laptop 13 running Ubuntu for dev on the go.",
		href: "https://frame.work/laptop13",
	},
	{
		name: "Keyboard",
		description: "Lemokey L4.",
		href: "https://www.lemokey.com/products/lemokey-l4-qmk-wireless-custom-gaming-keyboard",
	},
	{
		name: "Monitor",
		description: "LG UltraGear 49-inch ultrawide.",
		href: "https://www.lg.com/us/monitors/lg-49gr85dc-b-gaming-monitor",
	},
	{
		name: "Headset",
		description: "SteelSeries Arctis Nova 7.",
		href: "https://steelseries.com/gaming-headsets/arctis-nova-7",
	},
];

const software: UsesItem[] = [
	{
		name: "VS Code",
		description:
			"Editor for code, markdown, and all kinds of text. Love the wide range of extensions, compatibility, and customization options.",
		href: "https://code.visualstudio.com/",
	},
	{
		name: "WezTerm",
		description:
			"Terminal emulator with GPU acceleration, multiplexing, and extensive configuration options.",
		href: "https://wezterm.org/",
	},
	{
		name: "Claude Code",
		description:
			"Development assistant, helps with rapid iteration and another perspective on code review.",
		href: "https://claude.com/product/claude-code",
	},
	{
		name: "Codex",
		description: "OpenAI's coding agent, a second take on implementation and code review.",
		href: "https://github.com/openai/codex",
	},
	{
		name: "Bitwarden",
		description: "Password manager with cross-platform support.",
		href: "https://bitwarden.com/",
	},
];

const services: UsesItem[] = [
	{
		name: "GitHub",
		description: "Source control, code review, and CI entry point.",
		href: "https://github.com/",
	},
	{
		name: "Home Assistant",
		description: "Home automation and local integrations.",
		href: "https://www.home-assistant.io/",
	},
	{
		name: "Cloudflare",
		description: "DNS, edge delivery, and hosting for this site.",
		href: "https://www.cloudflare.com/",
	},
	{
		name: "Traefik",
		description: "Reverse proxy for self-hosted services.",
		href: "https://traefik.io/",
	},
	{
		name: "Tailscale",
		description: "Mesh VPN for remote access to my home network.",
		href: "https://tailscale.com/",
	},
	{
		name: "Jellyfin",
		description: "Self-hosted media server.",
		href: "https://jellyfin.org/",
	},
];

export default function Uses() {
	return (
		<div className="space-y-12">
			<h1 className="text-4xl font-bold tracking-tight">What I Use</h1>
			<UsesSection title="Hardware" items={hardware} />
			<UsesSection title="Software" items={software} />
			<UsesSection title="HomeLab &amp; Web Services" items={services} />
		</div>
	);
}
