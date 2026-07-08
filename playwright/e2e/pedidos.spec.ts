import { test, expect } from '@playwright/test';
//Arrange, Act e Assert 

test('Deve consultar um pedido aprovado', async ({ page }) => {
  // arrange  - preparação do teste
await page.goto('http://localhost:5173/');
await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
await page.getByRole('link', { name: 'Consultar Pedido' }).click();
await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
// act - ação do teste
await page.getByTestId('search-order-id').fill('VLO-7F0C91');
await page.getByTestId('search-order-button').click();
// assert - verificação do resultado do teste
await expect(page.getByTestId('order-result-id')).toBeVisible();
await expect(page.getByTestId('order-result-id')).toContainText('VLO-7F0C91');
// assert - verificação do resultado do teste
await expect(page.getByTestId('order-result-status')).toBeVisible();
await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});