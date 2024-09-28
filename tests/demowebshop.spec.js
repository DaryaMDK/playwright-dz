const { test, expect } = require('@playwright/test');
const { MainPage } = require('../pages/MainPage');
const { ProductPage } = require('../pages/ProductPage');
const { RegisterPage } = require('../pages/RegisterPage');
const { LoginPage } = require('../pages/LoginPage');

test('search one product', async ({ page }) => {
  const mainPage = new MainPage(page);
  const productPage = new ProductPage(page);
  await mainPage.goto();
  await mainPage.searchForProduct('laptop');
  const firstProductText = await productPage.getFirstProductText();
  expect(firstProductText).toContain('14.1-inch Laptop');
});

test('send vote', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.voteInPoll();
  await expect(page.locator(mainPage.pollVoteError)).toHaveText('Only registered users can vote.');
});

test('send newsletter', async ({ page }) => {
  const mainPage = new MainPage(page);
  const sendText = 'Thank you for signing up! A verification email has been sent. We appreciate your interest.';
  await mainPage.goto();
  await mainPage.subscribeToNewsletter('test@mail.ru');
  await expect(page.locator(mainPage.newsletterResult)).toContainText(sendText);
});

test('open register page', async ({ page }) => {
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  await mainPage.goto();
  await page.locator('a[href="/register"]').click();
  await expect(page).toHaveURL(mainPage.baseUrl + '/register');
  const isRegisterButtonVisible = await registerPage.isRegisterButtonVisible();
  expect(isRegisterButtonVisible).toBe(true);
});

test('navigate to login page', async ({ page }) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.goto();
  await page.locator('a[href="/login"]').click();
  await expect(page).toHaveURL(mainPage.baseUrl + '/login');
  const isLoginButtonVisible = await loginPage.isLoginButtonVisible();
  expect(isLoginButtonVisible).toBe(true);
});
