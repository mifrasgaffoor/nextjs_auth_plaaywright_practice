import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login test", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("mmifras58@gmail.com", "test");
  await page.waitForNavigation();
  expect(page.url()).toBe("http://localhost:3000/");
});
