import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import CadastroLgPage from '../support/pages/CadastroLgPage';

test.describe('Cadastro LG', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let cadastroLgPage: CadastroLgPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    cadastroLgPage = new CadastroLgPage(page);
    await page.goto(BASE_URL);
  });

  test('Preencher formulário de cadastro', async () => {
    await cadastroLgPage.preencherFormulario();
    await cadastroLgPage.validarCadastro();
  });
});
