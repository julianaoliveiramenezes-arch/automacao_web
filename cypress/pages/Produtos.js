class Produtos {
  get allProductsTitle() { return cy.contains('h2.title', 'All Products'); }
  get searchInput() { return cy.get('#search_product'); }
  get searchBtn() { return cy.get('#submit_search'); }
  get searchedProductsTitle() { return cy.contains('h2.title', 'Searched Products'); }
  get firstViewProductBtn() { return cy.get('a[href="/product_details/1"]'); }
  get productName() { return cy.get('.product-information h2'); }
  get productCategory() { return cy.get('.product-information p').eq(0); }
  get productPrice() { return cy.get('.product-information span span'); }
  get productAvailability() { return cy.get('.product-information p').eq(1); }
  get addToCartBtn() { return cy.get('.product-information button.cart'); }

  searchProduct(productName) {
    this.searchInput.type(productName);
    this.searchBtn.click();
  }
}

export default new Produtos();