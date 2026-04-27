import { expect, test } from "@playwright/test";

test("home page renders name and title", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { name: "Andrew Weinmann" })).toBeVisible();
	await expect(page.getByText("software developer")).toBeVisible();
});

test("can navigate to About page via nav", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "Who I Am" }).click();
	await expect(page).toHaveURL("/about");
	await expect(page.getByRole("heading", { name: "Who I Am" })).toBeVisible();
});

test("can navigate to Photos page via nav", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "Dog Photos" }).click();
	await expect(page).toHaveURL("/photos");
	await expect(page.getByRole("heading", { name: "Photos" })).toBeVisible();
});

test("can navigate to Uses page via nav", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "What I Use" }).click();
	await expect(page).toHaveURL("/uses");
	await expect(page.getByRole("heading", { name: "What I Use" })).toBeVisible();
});

test("direct navigation to /about works (SPA routing)", async ({ page }) => {
	await page.goto("/about");
	await expect(page.getByRole("heading", { name: "Who I Am" })).toBeVisible();
});

test("direct navigation to /photos works (SPA routing)", async ({ page }) => {
	await page.goto("/photos");
	await expect(page.getByRole("heading", { name: "Photos" })).toBeVisible();
});

test("direct navigation to /uses works (SPA routing)", async ({ page }) => {
	await page.goto("/uses");
	await expect(page.getByRole("heading", { name: "What I Use" })).toBeVisible();
});
