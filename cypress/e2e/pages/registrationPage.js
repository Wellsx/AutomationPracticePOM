class registrationPage {
  createAccount(uniqueEmailAddress) {
    cy.get('#email_create')
      .should('be.visible')
      .type(uniqueEmailAddress)
      .should('have.value', uniqueEmailAddress);

    cy.get('#SubmitCreate').should('be.visible').click();

    cy.url().should(
      'contain',
      'controller=authentication&back=my-account#account-creation'
    );
    return this;
  }
  inputFirstName(firstName) {
    cy.get('#customer_firstname')
      .should('be.visible')
      .type(firstName)
      .should('have.value', firstName);
  }

  inputLastName(lastName) {
    cy.get('#customer_lastname')
      .should('be.visible')
      .type(lastName)
      .should('have.value', lastName);
  }

  verifyEmail(uniqueEmailAddress) {
    cy.get('#email').should('be.visible').and('have.value', uniqueEmailAddress);
  }

  inputPassword(password) {
    cy.get('#passwd')
      .should('be.visible')
      .type(password)
      .should('have.value', password);
  }

  inputNewFirstName(new_firstName) {
    cy.get('#firstname')
      .should('be.visible')
      .clear()
      .type(new_firstName)
      .should('have.value', new_firstName);
  }

  verifyLastName(lastName) {
    cy.get('#lastname').should('be.visible').and('have.value', lastName);
  }

  inputAddress(address) {
    cy.get('#address1')
      .should('be.visible')
      .type(address)
      .should('have.value', address);
  }

  inputCity(city) {
    cy.get('#city').should('be.visible').type(city).should('have.value', city);
  }

  selectState(state) {
    cy.get('#id_state').select(state).should('have.value', '1');
  }

  inputPostcode(postcode) {
    cy.get('#postcode')
      .should('be.visible')
      .type(postcode)
      .should('have.value', postcode);
  }

  selectCountry() {
    cy.get('#id_country').select('United States').should('have.value', '21');
  }

  inputPhoneNumber(phoneNumber) {
    cy.get('#phone_mobile')
      .should('be.visible')
      .type(phoneNumber)
      .should('have.value', phoneNumber);
  }

  inputAlias(address) {
    cy.get('#alias')
      .should('be.visible')
      .clear()
      .type(address)
      .should('have.value', address);
  }

  submitAccount() {
    cy.get('#submitAccount').should('be.visible').click();
    cy.url().should('contain', 'controller=my-account');
    cy.get('.logout').should('be.visible');
  }
}
export default registrationPage;
