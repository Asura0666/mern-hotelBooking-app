import test, { expect } from "@playwright/test";
import path from "path";

const UI_URl = "http://localhost:5173";

test.beforeEach(async ({ page }) => {
  await page.goto(UI_URl);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name = email]").fill("test_register@test.com");

  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
});

test("Should allow user to add a hotel", async ({ page }) => {
  await page.goto(`${UI_URl}/add-hotel`);

  await page.locator('[name = "name"]').fill("Test Hotel");
  await page.locator('[name="city"]').fill("Test City");
  await page.locator('[name="country"]').fill("Test Country");
  await page
    .locator('[name="description"]')
    .fill("This is a description for the Test Hotel");
  await page.locator('[name="pricePerNight"]').fill("1000");
  await page.selectOption('select[name="starRating"]', "4");

  await page.getByText("Business").click();

  await page.getByLabel("Fitness Center").check();
  await page.getByLabel("Non-Smoking Rooms").check();
  await page.getByLabel("Spa").check();
  await page.getByLabel("Parking").check();

  await page.locator('[name="adultCount"]').fill("4");
  await page.locator('[name="childCount"]').fill("2");

  await page.setInputFiles('[name="imageUrls"]', [
    path.join(__dirname, "files", "1.jpg"),
    path.join(__dirname, "files", "2.jpg"),
    path.join(__dirname, "files", "3.jpg"),
  ]);

  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Hotel Saved!")).toBeVisible();
});
