import HomePage from '../pages/HomePage';
import Autenticacao from '../pages/Autenticacao';

describe('Caso de teste 3: Login do usuário com e-mail e senha incorretos', () => {
  it('Deve exibir mensagem de erro ao informar credenciais inválidas', () => {
    HomePage.visit();
    HomePage.clickSignupLogin();
    Autenticacao.login('invalid_user_999@example.com', 'wrongpassword');
    Autenticacao.loginErrorMessage.should('be.visible');
  });
});