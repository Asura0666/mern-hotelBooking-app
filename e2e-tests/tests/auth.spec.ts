import { test, expect } from "@playwright/test";

const UI_URl = "http://localhost:5173/";

test("Should allow user to register", async ({ page }) => {

  const testEmail = `test_register_${Math.floor(Math.random() * 9000) * 10000}@test.com`

  await page.goto(UI_URl);

  await page.getByRole("link", { name: "Sign In" }).click();

  await page.getByRole("link", { name: " Create an account here" }).click();
  await expect(
    page.getByRole("heading", { name: "Create an Account" })
  ).toBeVisible();

  //form
  await page.locator("[name = firstName]").fill("test_firstName");
  await page.locator("[name = lastName]").fill("test_lastName");

  await page.locator("[name = email]").fill(testEmail);
  await page.locator("[name = password]").fill("123456");
  await page.locator("[name = confirmPassword]").fill("123456");

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registered Successfully !")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();

  await page.getByRole("button", { name: "Sign Out" }).click();

  await expect(page.getByRole("link", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Signed Out!")).toBeVisible();
});
test("Should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URl);

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name = email]").fill("test_register@test.com");

  await page.locator("[name=password]").fill("123456");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Sign in Successful!")).toBeVisible();
  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();

  await page.getByRole("button", { name: "Sign Out" }).click();

  await expect(page.getByRole("link", { name: "Sign In" })).toBeVisible();
  await expect(page.getByText("Signed Out!")).toBeVisible();
});
