import homePage from '../pages/HomePage';
import productsPage from '../pages/Produtos';

describe('Caso de teste 8: Verificar todos os produtos e a página de detalhes do produto', () => {
  it('Deve navegar para produtos e validar a página de detalhes', () => {
    homePage.visit();
    homePage.clickProducts();
    
    productsPage.allProductsTitle.should('have.text', 'All Products');
    productsPage.firstViewProductBtn.click();

    productsPage.productName.should('be.visible');
    productsPage.productCategory.should('be.visible');
    productsPage.productPrice.should('be.visible');
    productsPage.productAvailability.should('be.visible');
  });
});