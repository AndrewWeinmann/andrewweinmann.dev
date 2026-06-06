import type { ReactNode } from "react";

interface ExternalLinkProps {
	href: string;
	className?: string;
	"aria-label"?: string;
	children: ReactNode;
}

export default function ExternalLink({
	href,
	className,
	"aria-label": ariaLabel,
	children,
}: ExternalLinkProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			aria-label={ariaLabel}
		>
			{children}
		</a>
	);
}
