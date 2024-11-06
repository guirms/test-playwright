import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class CadastroLgElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoEmail(): Locator {
    return this.page.locator('#email');
  }

  getCampoValidarEmail(): Locator {
    return this.page.locator('#button_duplicate-check');
  }

  getCampoNome(): Locator {
    return this.page.locator('#firstName');
  }

  getCampoSobrenome(): Locator {
    return this.page.locator('#lastName');
  }

  getCampoCelular(): Locator {
    return this.page.locator('#mobileNumber');
  }

  getDiaNasc(): Locator {
    return this.page.locator('#day');
  }

  getMesNasc(): Locator {
    return this.page.locator('#month');
  }

  getAnoNasc(): Locator {
    return this.page.locator('#year');
  }

  getSenha(): Locator {
    return this.page.locator('#password');
  }

  getConfirmarSenha(): Locator {
    return this.page.locator('#confirmPassword');
  }

  getTermosDeUso(): Locator {
    return this.page.getByLabel('Concordo com os Termos de Utilização. ');
  }

  getPoliticas(): Locator {
    return this.page.locator('#privacyPolicy');
  }

  getMessageOK(): Locator {
    return this.page.locator('text=Verifique Sua Conta LG.com');
  }

  getBotaoCadastro(): Locator {
    return this.page.locator('#button__signup--submit');
  }
}
