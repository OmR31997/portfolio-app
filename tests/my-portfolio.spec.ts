import { test, expect } from "@playwright/test";


test("portfolio homepage loads successfully", async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Om Rathore/i);
});