import HomePage from '../pages/HomePage';
import Autenticacao from '../pages/Autenticacao';
import { createTestUser } from '../support/testData';

describe('Caso de teste 2: Login do usuário com e-mail e senha corretos', () => {
  it('Deve realizar login com credenciais válidas', () => {
    const user = createTestUser();

    HomePage.visit();
    HomePage.clickSignupLogin();
    Autenticacao.registerUser(user);
    HomePage.clickLogout();
    HomePage.clickSignupLogin();
    Autenticacao.login(user.email, user.password);
    HomePage.loggedInUserText.should('be.visible');
  });
});