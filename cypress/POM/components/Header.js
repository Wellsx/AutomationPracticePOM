class Header {
  click_SignIn_button() {
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&back=my-account'
    );
    return this;
  }
  click_Contact_us() {
    cy.get('#contact-link').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=contact'
    );
    return this;
  }
  click_My_Account() {
    cy.get('.account').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=my-account'
    );
    return this;
  }
  click_Sign_Out() {
    cy.get('.logout').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
    return this;
  }
}
export default new Header();
