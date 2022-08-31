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
}
export default new Header();
