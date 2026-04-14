import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Avatar from "./avatar.tsx";

describe("Avatar", () => {
	it("renders initials fallback when no src is provided", () => {
		render(<Avatar />);
		const el = screen.getByRole("img", { name: "Andrew Weinmann" });
		expect(el.tagName).not.toBe("IMG");
		expect(screen.getByText("AW")).toBeInTheDocument();
	});

	it("renders image element when src is provided", () => {
		render(<Avatar src="/avatar.jpg" alt="Andrew Weinmann" />);
		const img = screen.getByRole("img", { name: "Andrew Weinmann" });
		expect(img.tagName).toBe("IMG");
		expect(img).toHaveAttribute("src", "/avatar.jpg");
	});

	it("uses the provided alt text on the image", () => {
		render(<Avatar src="/avatar.jpg" alt="Custom alt" />);
		expect(screen.getByAltText("Custom alt")).toBeInTheDocument();
	});

	it("applies size classes", () => {
		const { container } = render(<Avatar size="sm" />);
		expect(container.firstChild).toHaveClass("w-12");
	});
});
