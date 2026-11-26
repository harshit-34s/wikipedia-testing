
const { test, expect } = require('@playwright/test');

test('TC14 - Capture Wikipedia homepage screenshot', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  await expect(page).toHaveTitle(/Wikipedia/);

  await page.screenshot({
    path: 'test-results/wikipedia-homepage.png',
    fullPage: true
  });
});

test('TC15 - Capture article screenshot', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  await expect(
    page.getByRole('heading', {
      name: 'Computer science',
      exact: true
    }).first()
  ).toBeVisible();

  await page.screenshot({
    path: 'test-results/computer-science-article.png',
    fullPage: true
  });
});
