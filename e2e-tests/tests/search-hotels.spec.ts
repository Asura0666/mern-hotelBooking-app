import { test, expect } from "@playwright/test";

const UI_URl = "http://localhost:5173";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URl);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name = email]").fill("light@123.com");

  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
});

test("Should show hotel search results", async ({ page }) => {
  await page.goto(UI_URl);

  await page.getByPlaceholder("where are you going?").fill("Mumbai");

  await page.getByRole("button", { name: "Search" }).click();

  await expect(page.getByText("Hotels Found In Mumbai")).toBeVisible();

  await expect(page.getByText("Berserk").nth(0)).toBeVisible();
});

test("Should show hotel detail", async ({ page }) => {
  await page.goto(UI_URl);

  await page.getByPlaceholder("where are you going?").fill("Mumbai");

  await page.getByRole("button", { name: "Search" }).click();

  await page.getByText("Berserk").nth(0).click();

  await expect(page).toHaveURL(/detail/);

  await expect(page.getByRole("button", { name: "Book Now" })).toBeVisible();
});
