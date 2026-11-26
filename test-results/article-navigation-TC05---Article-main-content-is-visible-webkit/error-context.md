# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: article-navigation.spec.js >> TC05 - Article main content is visible
- Location: tests\article-navigation.spec.js:15:1

# Error details

```
Error: page.goto: Could not connect to server
Call log:
  - navigating to "https://en.wikipedia.org/wiki/Computer_science", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('TC04 - Computer Science article opens', async ({ page }) => {
  5  |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
  6  | 
  7  |   await expect(
  8  |     page.getByRole('heading', {
  9  |       name: 'Computer science',
  10 |       exact: true
  11 |     }).first()
  12 |   ).toBeVisible();
  13 | });
  14 | 
  15 | test('TC05 - Article main content is visible', async ({ page }) => {
> 16 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
     |              ^ Error: page.goto: Could not connect to server
  17 | 
  18 |   await expect(page.locator('#mw-content-text')).toBeVisible();
  19 | });
  20 | 
  21 | test('TC06 - Article contains section headings', async ({ page }) => {
  22 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
  23 | 
  24 |   await expect(
  25 |     page.getByRole('heading', { name: 'History', exact: true })
  26 |   ).toBeVisible();
  27 | });
  28 | 
  29 | test('TC07 - Article contains internal Wikipedia links', async ({ page }) => {
  30 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
  31 | 
  32 |   const internalLinks = page.locator(
  33 |     '#mw-content-text a[href^="/wiki/"]'
  34 |   );
  35 | 
  36 |   await expect(internalLinks.first()).toBeVisible();
  37 | });
  38 | 
  39 | test('TC08 - Article page title is correct', async ({ page }) => {
  40 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
  41 | 
  42 |   await expect(page).toHaveTitle(/Computer science.*Wikipedia/i);
  43 | });
  44 | 
  45 | test('TC09 - User can navigate to an article section', async ({ page }) => {
  46 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
  47 | 
  48 |   const historyHeading = page.getByRole('heading', {
  49 |     name: 'History',
  50 |     exact: true
  51 |   });
  52 | 
  53 |   await historyHeading.scrollIntoViewIfNeeded();
  54 |   await expect(historyHeading).toBeVisible();
  55 | });
  56 | 
```