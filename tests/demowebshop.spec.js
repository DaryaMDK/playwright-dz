import { test, expect } from '@playwright/test';

const baseUrl = 'https://demowebshop.tricentis.com';

test('search one product', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator('#small-searchterms').click();
  await page.locator('#small-searchterms').fill('laptop');
  await page.getByRole('button', { name: 'Search' }).click();
  const searchResults = await page.locator('.product-title').first();
  await expect(searchResults).toContainText('14.1-inch Laptop');
});

test('send vote', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator('#pollanswers-2').click();
  await page.locator('#vote-poll-1').click();
  await expect(page.locator('.poll-vote-error')).toHaveText('Only registered users can vote.')
});

test('send newsletter', async ({ page }) => {
  const sendText = 'Thank you for signing up! A verification email has been sent. We appreciate your interest.';
  await page.goto(baseUrl);
  await page.locator('#newsletter-email').fill('test@mail.ru');
  await page.locator('#newsletter-subscribe-button').click();
  await expect(page.locator('#newsletter-result-block')).toContainText(sendText)
});

test('open register page', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator('a[href="/register"]').click();
  await expect(page).toHaveURL(baseUrl + '/register');
  await expect(page.locator('#register-button')).toBeVisible();
});

test('navigate to login page', async ({ page }) => {
  await page.goto(baseUrl);
  await page.locator('a[href="/login"]').click();
  await expect(page).toHaveURL(baseUrl + '/login');
  await expect(page.locator('input[value="Log in"]')).toBeVisible();
});