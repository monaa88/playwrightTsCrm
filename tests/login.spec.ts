import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("login page", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  await page.goto("https://classic.crmpro.com/");
  const email: Locator = await page.locator('//input[@placeholder="Username"]');
  await email.fill("groupautomation");

  const password: Locator = await page.locator(
    '//input[@placeholder="Password"]'
  );
  await password.fill("Test@12345");

  const submit: Locator = await page.locator('//input[@type="submit"]');
  await submit.click();

  const title = await page.title();
  expect(title).toBeDefined();

  await page.screenshot({ path: "homePage.png" });

  browser.close();
});
