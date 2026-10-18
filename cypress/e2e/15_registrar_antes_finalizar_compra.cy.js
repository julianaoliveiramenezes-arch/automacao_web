import homePage from '../pages/HomePage';
import authPage from '../pages/Autenticacao';
import productsPage from '../pages/Produtos';
import cartPage from '../pages/Carrinho';
import checkoutPage from '../pages/FinalizarCompra';
import { createTestUser } from '../support/testData';

describe('Caso de teste 15: Fazer pedido: Registre-se antes de finalizar a compra', () => {
  it('Deve realizar um pedido cadastrando usuário antes do checkout', () => {
    const user = createTestUser();

    homePage.visit();
    homePage.clickSignupLogin();
    authPage.initiateSignup(user.name, user.email);
    authPage.fillAccountForm(user);
    authPage.continueBtn.click();

    homePage.clickProducts();
    productsPage.firstViewProductBtn.click();
    productsPage.addToCartBtn.click();
    
    homePage.clickCart();
    cartPage.clickProceedToCheckout();

    checkoutPage.placeOrderBtn.click();
    checkoutPage.fillPaymentDetailsAndConfirm({
      name: user.name,
      number: '4111111111111111',
      cvc: '311',
      month: '12',
      year: '2028'
    });

    checkoutPage.successOrderMessage.should('be.visible');
  });
});