import homePage from '../pages/HomePage';
import authPage from '../pages/Autenticacao';
import { createTestUser } from '../support/testData';

describe('Caso de teste 4: Fazer logout do usuário', () => {
  it('Deve realizar logout com sucesso', () => {
    const user = createTestUser();

    homePage.visit();
    homePage.clickSignupLogin();
    authPage.registerUser(user);
    homePage.clickLogout();
    homePage.clickSignupLogin();
    authPage.login(user.email, user.password);
    homePage.loggedInUserText.should('be.visible');
    homePage.clickLogout();
    cy.url().should('include', '/login');
  });
});