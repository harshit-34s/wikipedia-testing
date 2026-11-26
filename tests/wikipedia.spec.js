
const { test, expect } = require('@playwright/test');

test('Wikipedia homepage loads successfully', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  await expect(page).toHaveTitle(/Wikipedia/);

  await expect(
    page.getByRole('link', { name: /English/ }).first()
  ).toBeVisible();
});

test('User can search for India', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const searchBox = page.getByRole('searchbox');

  await searchBox.fill('India');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/wiki\/India/i);
  await expect(
    page.getByRole('heading', { name: 'India', exact: true }).first()
  ).toBeVisible();
});

test('India article opens successfully', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/India');

  await expect(
    page.getByRole('heading', { name: 'India', exact: true }).first()
  ).toBeVisible();
});
