import homePage from '../pages/HomePage';
import authPage from '../pages/Autenticacao';
import { createTestUser } from '../support/testData';

describe('Caso de teste 5: Cadastrar usuário com e-mail existente', () => {
  it('Deve validar que não é possível cadastrar e-mail já existente', () => {
    const user = createTestUser();

    homePage.visit();
    homePage.clickSignupLogin();
    authPage.registerUser(user);
    homePage.clickLogout();
    homePage.clickSignupLogin();
    authPage.initiateSignup(user.name, user.email);
    authPage.signupErrorMessage.should('be.visible');
  });
});