import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BasePage from './BasePage';
import CadastroLgElements from '../elements/CadastroLgElements';

export default class CadastroLgPage extends BasePage {
  readonly cadastroLgElements: CadastroLgElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.cadastroLgElements = new CadastroLgElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.cadastroLgElements
      .getCampoEmail()
      .fill(new Date().getSeconds() + faker.internet.email());
    await this.cadastroLgElements.getTermosDeUso().click({ force: true });
    await this.cadastroLgElements.getPoliticas().click({ force: true });
    await this.cadastroLgElements.getCampoValidarEmail().click();
    await this.cadastroLgElements.getCampoNome().fill('João');
    await this.cadastroLgElements.getCampoSobrenome().fill('Silva');
    await this.cadastroLgElements.getCampoCelular().fill('(48) 99935-1554');
    await this.cadastroLgElements.getDiaNasc().fill('04');
    await this.cadastroLgElements.getMesNasc().selectOption('Setembro');
    await this.cadastroLgElements.getAnoNasc().fill('2003');
    await this.cadastroLgElements.getSenha().fill('@Teste9314');
    await this.cadastroLgElements.getConfirmarSenha().fill('@Teste9314');

    await new Promise(f => setTimeout(f, 4000));
    await this.cadastroLgElements.getBotaoCadastro().click({ force: true });
  }

  async validarCadastro(): Promise<void> {
    await expect(this.cadastroLgElements.getMessageOK()).toBeVisible();
  }
}
