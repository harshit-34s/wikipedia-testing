# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: evidence.spec.js >> TC15 - Capture article screenshot
- Location: tests\evidence.spec.js:15:1

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
  4  | test('TC14 - Capture Wikipedia homepage screenshot', async ({ page }) => {
  5  |   await page.goto('https://www.wikipedia.org/');
  6  | 
  7  |   await expect(page).toHaveTitle(/Wikipedia/);
  8  | 
  9  |   await page.screenshot({
  10 |     path: 'test-results/wikipedia-homepage.png',
  11 |     fullPage: true
  12 |   });
  13 | });
  14 | 
  15 | test('TC15 - Capture article screenshot', async ({ page }) => {
> 16 |   await page.goto('https://en.wikipedia.org/wiki/Computer_science');
     |              ^ Error: page.goto: Could not connect to server
  17 | 
  18 |   await expect(
  19 |     page.getByRole('heading', {
  20 |       name: 'Computer science',
  21 |       exact: true
  22 |     }).first()
  23 |   ).toBeVisible();
  24 | 
  25 |   await page.screenshot({
  26 |     path: 'test-results/computer-science-article.png',
  27 |     fullPage: true
  28 |   });
  29 | });
  30 | 
```