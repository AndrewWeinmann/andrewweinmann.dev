import { NavLink } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
	isActive
		? "text-heading underline decoration-accent underline-offset-4"
		: "hover:text-text transition-colors";

export default function Nav() {
	return (
		<header className="border-b border-border">
			<nav
				className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between"
				aria-label="Main navigation"
			>
				<NavLink
					to="/"
					className="font-sans font-semibold text-heading text-sm tracking-tight hover:text-accent transition-colors"
				>
					AW
				</NavLink>
				<div className="flex gap-6 text-sm text-muted">
					<NavLink to="/about" className={navLinkClass}>
						Who I Am
					</NavLink>
					<NavLink to="/uses" className={navLinkClass}>
						What I Use
					</NavLink>
					<NavLink to="/photos" className={navLinkClass}>
						Dog Photos
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
