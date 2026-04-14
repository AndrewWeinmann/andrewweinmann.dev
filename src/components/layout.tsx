import { Outlet } from "react-router";
import ExternalLink from "./external-link.tsx";
import Nav from "./nav.tsx";

const footerLinkClass = "hover:text-accent transition-colors";

export default function Layout() {
	return (
		<div className="min-h-screen flex flex-col bg-bg text-text">
			<Nav />
			<main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12">
				<Outlet />
			</main>
			<footer className="border-t border-border py-8">
				<div className="max-w-2xl mx-auto px-4 flex items-center justify-between text-sm text-muted">
					<div className="flex gap-6">
						<ExternalLink href="https://github.com/andrewweinmann" className={footerLinkClass}>
							GitHub
						</ExternalLink>
						<ExternalLink
							href="https://www.linkedin.com/in/andrew-weinmann-1101/"
							className={footerLinkClass}
						>
							LinkedIn
						</ExternalLink>
					</div>
					<span>Made in Wisconsin. Dog approved.</span>
				</div>
			</footer>
		</div>
	);
}
