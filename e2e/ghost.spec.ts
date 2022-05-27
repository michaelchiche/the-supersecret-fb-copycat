import { test, expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ context, page }) => {
  await page.goto('http://localhost:1234/post/1');
  const watcher = await context.newPage();
  await watcher.goto('http://localhost:1234/post/1');
});

test('Add Comments', async ({ context }) => {
  const post = faker.lorem.sentences(7);
  const [page, watcher] = context.pages();

  // Go to http://localhost:1234/post/1
  await page.goto('http://localhost:1234/post/1');

  // Click [placeholder="What are your thoughts\?"]
  await page.locator('[placeholder="What are your thoughts\\?"]').click();

  // Fill [placeholder="What are your thoughts\?"]
  await page.locator('[placeholder="What are your thoughts\\?"]').fill(post);

  await page.waitForTimeout(1000);

  // Press Enter
  await page
    .locator('[placeholder="What are your thoughts\\?"]')
    .press('Enter');

  await page.waitForTimeout(1000);
  await expect(page.locator('#comments > div:nth-child(1)')).toContainText(
    post,
  );
  await expect(watcher.locator('#comments > div:nth-child(1)')).toContainText(
    post,
  );
});
