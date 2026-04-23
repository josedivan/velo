import { test, expect } from '@playwright/test';

test('Deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/');

    //CHECKPOINT
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

  await page.getByRole('link', { name: 'Consultar Pedido' }).click();

  //CHECKPOINT
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

    //CHECKPOINT
  await page.getByTestId('search-order-id').fill('VLO-YHVL7P');

  await page.getByTestId('search-order-button').click();

    //CHECKPOINT
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-YHVL7P');

    //CHECKPOINT
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});