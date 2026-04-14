import { expect, test } from "@playwright/test";

test("home page renders name and title", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { name: "Andrew Weinmann" })).toBeVisible();
	await expect(page.getByText("Software Engineer at Epic")).toBeVisible();
});

test("can navigate to About page via nav", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "About" }).click();
	await expect(page).toHaveURL("/about");
	await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
});

test("can navigate to Uses page via nav", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("link", { name: "Uses" }).click();
	await expect(page).toHaveURL("/uses");
	await expect(page.getByRole("heading", { name: "Uses" })).toBeVisible();
});

test("direct navigation to /about works (SPA routing)", async ({ page }) => {
	await page.goto("/about");
	await expect(page.getByRole("heading", { name: "About" })).toBeVisible();
});

test("direct navigation to /uses works (SPA routing)", async ({ page }) => {
	await page.goto("/uses");
	await expect(page.getByRole("heading", { name: "Uses" })).toBeVisible();
});
