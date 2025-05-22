import { chromium } from "@playwright/test";
import { describe } from "node:test";
import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { time } from "console";

describe("Demo", () => {
  const filePath = "../fileUploads/toUploadImage.png";
  test("Upload file using set inputfiles", async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/upload");
    const fileInput = await page.locator("//input[@id='file-upload']");
    await fileInput.setInputFiles(filePath);
  });
});
