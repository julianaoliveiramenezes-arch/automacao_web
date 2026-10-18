class FinalizarCompra {
  get placeOrderBtn() { return cy.get('a[href="/payment"]'); }
  get nameOnCardInput() { return cy.get('[data-qa="name-on-card"]'); }
  get cardNumberInput() { return cy.get('[data-qa="card-number"]'); }
  get cvcInput() { return cy.get('[data-qa="cvc"]'); }
  get expiryMonthInput() { return cy.get('[data-qa="expiry-month"]'); }
  get expiryYearInput() { return cy.get('[data-qa="expiry-year"]'); }
  get payAndConfirmBtn() { return cy.get('[data-qa="pay-button"]'); }
  get successOrderMessage() { return cy.get('[data-qa="order-placed"]'); }

  fillPaymentDetailsAndConfirm(cardData) {
    this.nameOnCardInput.type(cardData.name);
    this.cardNumberInput.type(cardData.number);
    this.cvcInput.type(cardData.cvc);
    this.expiryMonthInput.type(cardData.month);
    this.expiryYearInput.type(cardData.year);
    this.payAndConfirmBtn.click();
  }
}

export default new FinalizarCompra();