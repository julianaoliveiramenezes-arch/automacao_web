class Carrinho {
  get proceedToCheckoutBtn() { return cy.get('.btn.check_out'); }
  get registerLoginModalBtn() { return cy.get('.modal-content a[href="/login"]'); }

  clickProceedToCheckout() {
    this.proceedToCheckoutBtn.click();
  }
}

export default new Carrinho();