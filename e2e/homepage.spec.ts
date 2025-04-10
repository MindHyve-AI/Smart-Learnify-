import { test, expect } from '@playwright/test';

test('homepage has the correct title and elements', async ({ page }) => {
  await page.goto('/');
  
  // Check page title
  await expect(page).toHaveTitle(/Smart Learnify AI/);
  
  // Check hero section
  await expect(page.getByRole('heading', { name: /Transform Learning/i })).toBeVisible();
  
  // Check navigation links
  await expect(page.getByRole('link', { name: /Features/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /About/i })).toBeVisible();
  
  // Check CTA buttons
  await expect(page.getByRole('link', { name: /Get Started/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Learn More/i })).toBeVisible();
  
  // Check features section
  await expect(page.getByRole('heading', { name: /Powerful Features/i })).toBeVisible();
  
  // Check testimonials section
  await expect(page.getByRole('heading', { name: /What Our Students Say/i })).toBeVisible();
  
  // Check FAQ section
  await expect(page.getByRole('heading', { name: /Frequently Asked Questions/i })).toBeVisible();
}); 