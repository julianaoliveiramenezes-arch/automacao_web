import homePage from '../pages/HomePage';
import productsPage from '../pages/Produtos';

describe('Caso de teste 9: Pesquisar produto', () => {
  it('Deve buscar um produto e validar o retorno da busca', () => {
    homePage.visit();
    homePage.clickProducts();
    
    productsPage.searchProduct('Dress');
    productsPage.searchedProductsTitle.should('have.text', 'Searched Products');
    cy.get('.single-products').should('have.length.at.least', 1);
  });
});