import { test, expect } from "@playwright/test";

test.describe("Venue list", () => {
  test("navigates to home and clicks first venue in the list", async ({
    page,
  }) => {
    await page.goto("/");

    await page.locator("#venue-container a").first().waitFor();

    const firstVenue = page.locator("#venue-container a").first();
    await Promise.all([page.waitForURL("/venue/**"), firstVenue.click()]);

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
