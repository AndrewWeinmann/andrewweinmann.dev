import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../data/photos.ts", () => ({
	photos: [
		{ src: "/photos/jax1.jpg", alt: "Jax at the park" },
		{ src: "/photos/jax2.jpg", alt: "Jax with toy", caption: "Good boy" },
		{ src: "/photos/jax3.jpg", alt: "Jax sleeping" },
	],
}));

import Photos from "./photos.tsx";

describe("Photos", () => {
	it("renders the page heading", () => {
		render(<Photos />);
		expect(screen.getByRole("heading", { name: "Photos" })).toBeInTheDocument();
	});

	it("renders a thumbnail for each photo", () => {
		render(<Photos />);
		expect(screen.getByAltText("Jax at the park")).toBeInTheDocument();
		expect(screen.getByAltText("Jax with toy")).toBeInTheDocument();
		expect(screen.getByAltText("Jax sleeping")).toBeInTheDocument();
	});

	it("shows captions below thumbnails when present", () => {
		render(<Photos />);
		expect(screen.getByText("Good boy")).toBeInTheDocument();
	});

	it("does not show lightbox initially", () => {
		render(<Photos />);
		expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
	});

	describe("lightbox", () => {
		let user: ReturnType<typeof userEvent.setup>;

		beforeEach(async () => {
			user = userEvent.setup();
			render(<Photos />);
			await user.click(screen.getByAltText("Jax at the park"));
		});

		it("opens when a thumbnail is clicked", () => {
			expect(screen.getByRole("dialog", { name: "Photo lightbox" })).toBeInTheDocument();
		});

		it("shows the clicked photo", () => {
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByRole("img")).toHaveAttribute("alt", "Jax at the park");
			expect(within(dialog).getByRole("img")).toHaveAttribute("src", "/photos/jax1.jpg");
		});

		it("shows caption in lightbox when photo has one", async () => {
			await user.click(screen.getByRole("button", { name: "Close lightbox" }));
			await user.click(screen.getByAltText("Jax with toy"));
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByText("Good boy")).toBeInTheDocument();
		});

		it("closes when close button is clicked", async () => {
			await user.click(screen.getByRole("button", { name: "Close lightbox" }));
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
		});

		it("closes on Escape key", async () => {
			await user.keyboard("{Escape}");
			expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
		});

		it("navigates to next photo on ArrowRight", async () => {
			await user.keyboard("{ArrowRight}");
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByRole("img")).toHaveAttribute("alt", "Jax with toy");
		});

		it("navigates to previous photo on ArrowLeft", async () => {
			await user.keyboard("{ArrowRight}"); // go to index 1
			await user.keyboard("{ArrowLeft}"); // back to index 0
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByRole("img")).toHaveAttribute("alt", "Jax at the park");
		});

		it("wraps around to last photo when navigating left from first", async () => {
			await user.keyboard("{ArrowLeft}");
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByRole("img")).toHaveAttribute("alt", "Jax sleeping");
		});

		it("wraps around to first photo when navigating right from last", async () => {
			await user.keyboard("{ArrowRight}"); // index 1
			await user.keyboard("{ArrowRight}"); // index 2
			await user.keyboard("{ArrowRight}"); // wraps to index 0
			const dialog = screen.getByRole("dialog");
			expect(within(dialog).getByRole("img")).toHaveAttribute("alt", "Jax at the park");
		});
	});
});
