
const { test, expect } = require('@playwright/test');

test('TC04 - Computer Science article opens', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  await expect(
    page.getByRole('heading', {
      name: 'Computer science',
      exact: true
    }).first()
  ).toBeVisible();
});

test('TC05 - Article main content is visible', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  await expect(page.locator('#mw-content-text')).toBeVisible();
});

test('TC06 - Article contains section headings', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  await expect(
    page.getByRole('heading', { name: 'History', exact: true })
  ).toBeVisible();
});

test('TC07 - Article contains internal Wikipedia links', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  const internalLinks = page.locator(
    '#mw-content-text a[href^="/wiki/"]'
  );

  await expect(internalLinks.first()).toBeVisible();
});

test('TC08 - Article page title is correct', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  await expect(page).toHaveTitle(/Computer science.*Wikipedia/i);
});

test('TC09 - User can navigate to an article section', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Computer_science');

  const historyHeading = page.getByRole('heading', {
    name: 'History',
    exact: true
  });

  await historyHeading.scrollIntoViewIfNeeded();
  await expect(historyHeading).toBeVisible();
});
