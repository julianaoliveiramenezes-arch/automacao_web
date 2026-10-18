class Autenticacao {
  // Signup
  get signupNameInput() { return cy.get('[data-qa="signup-name"]'); }
  get signupEmailInput() { return cy.get('[data-qa="signup-email"]'); }
  get signupBtn() { return cy.get('[data-qa="signup-button"]'); }
  get signupErrorMessage() { return cy.contains('Email Address already exist!'); }

  // Form Registration
  get genderFemale() { return cy.get('#id_gender2'); }
  get passwordInput() { return cy.get('[data-qa="password"]'); }
  get daysSelect() { return cy.get('[data-qa="days"]'); }
  get monthsSelect() { return cy.get('[data-qa="months"]'); }
  get yearsSelect() { return cy.get('[data-qa="years"]'); }
  get firstNameInput() { return cy.get('[data-qa="first_name"]'); }
  get lastNameInput() { return cy.get('[data-qa="last_name"]'); }
  get companyInput() { return cy.get('[data-qa="company"]'); }
  get addressInput() { return cy.get('[data-qa="address"]'); }
  get countrySelect() { return cy.get('[data-qa="country"]'); }
  get stateInput() { return cy.get('[data-qa="state"]'); }
  get cityInput() { return cy.get('[data-qa="city"]'); }
  get zipcodeInput() { return cy.get('[data-qa="zipcode"]'); }
  get mobileInput() { return cy.get('[data-qa="mobile_number"]'); }
  get createAccountBtn() { return cy.get('[data-qa="create-account"]'); }
  get accountCreatedText() { return cy.get('[data-qa="account-created"]'); }
  get continueBtn() { return cy.get('[data-qa="continue-button"]'); }

  // Login
  get loginEmailInput() { return cy.get('[data-qa="login-email"]'); }
  get loginPasswordInput() { return cy.get('[data-qa="login-password"]'); }
  get loginBtn() { return cy.get('[data-qa="login-button"]'); }
  get loginErrorMessage() { return cy.contains('Your email or password is incorrect!'); }

  initiateSignup(name, email) {
    this.signupNameInput.type(name);
    this.signupEmailInput.type(email);
    this.signupBtn.click();
  }

  fillAccountForm(userData) {
    this.genderFemale.check();
    this.passwordInput.type(userData.password);
    this.daysSelect.select('1');
    this.monthsSelect.select('September');
    this.yearsSelect.select('1990');
    this.firstNameInput.type(userData.firstName);
    this.lastNameInput.type(userData.lastName);
    this.companyInput.type(userData.company);
    this.addressInput.type(userData.address);
    this.countrySelect.select('United States');
    this.stateInput.type(userData.state);
    this.cityInput.type(userData.city);
    this.zipcodeInput.type(userData.zipcode);
    this.mobileInput.type(userData.mobile);
    this.createAccountBtn.click();
  }

  registerUser(userData) {
    this.initiateSignup(userData.name, userData.email);
    this.fillAccountForm(userData);
    this.accountCreatedText.should('be.visible');
    this.continueBtn.click();
  }

  login(email, password) {
    this.loginEmailInput.type(email);
    this.loginPasswordInput.type(password);
    this.loginBtn.click();
  }
}

export default new Autenticacao();