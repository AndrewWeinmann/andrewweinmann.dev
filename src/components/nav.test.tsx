import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Nav from "./nav.tsx";

function renderNav() {
	render(
		<MemoryRouter>
			<Nav />
		</MemoryRouter>,
	);
}

describe("Nav", () => {
	it("renders the home link", () => {
		renderNav();
		const link = screen.getByRole("link", { name: "AW" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/");
	});

	it("renders the About link", () => {
		renderNav();
		const link = screen.getByRole("link", { name: "About" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/about");
	});

	it("renders the Uses link", () => {
		renderNav();
		const link = screen.getByRole("link", { name: "Uses" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/uses");
	});

	it("has accessible nav landmark", () => {
		renderNav();
		expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
	});
});
