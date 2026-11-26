
const { test, expect } = require('@playwright/test');

test('TC10 - Search with a single character', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const searchBox = page.getByRole('searchbox');
  await searchBox.fill('A');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/wikipedia\.org/);
  await expect(page.locator('body')).toContainText(/search|results|A/i);
});

test('TC11 - Search with a multi-word query', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const searchBox = page.getByRole('searchbox');
  await searchBox.fill('computer science');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/wikipedia\.org/);
  await expect(
    page.getByRole('heading', {
      name: /computer science/i
    }).first()
  ).toBeVisible();
});

test('TC12 - Search box accepts special characters', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const searchBox = page.getByRole('searchbox');
  await searchBox.fill('C++');
  await expect(searchBox).toHaveValue('C++');
});

test('TC13 - Search box accepts spaces in input', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  const searchBox = page.getByRole('searchbox');
  await searchBox.fill('software testing');

  await expect(searchBox).toHaveValue('software testing');
});
