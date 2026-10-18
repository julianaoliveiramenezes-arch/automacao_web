class HomePage {
  get signupLoginBtn() { return cy.get('a[href*="login"]'); }
  get loggedInUserText() { return cy.contains('Logged in as'); }
  get productsBtn() { return cy.get('a[href="/products"]'); }
  get cartBtn() { return cy.get('a[href="/view_cart"]').first(); }
  get subscriptionInput() { return cy.get('#susbscribe_email'); }
  get subscribeBtn() { return cy.get('#subscribe'); }
  get successSubscribeMsg() { return cy.get('#success-subscribe'); }
  get logoutBtn() { return cy.get('a[href="/logout"]'); }

  visit() {
    cy.visit('/');
  }

  clickSignupLogin() {
    this.signupLoginBtn.click();
  }

  clickProducts() {
    this.productsBtn.click();
  }

  clickCart() {
    this.cartBtn.click();
  }

  clickLogout() {
    this.logoutBtn.click();
  }

  subscribe(email) {
    this.subscriptionInput.type(email);
    this.subscribeBtn.click();
  }
}

export default new HomePage();