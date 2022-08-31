class Authentication {
  enterEmail(email) {
    cy.get('#email')
      .should('be.visible')
      .type(email)
      .should('have.value', email);
    return this;
  }
  enterPass(password) {
    cy.get('#passwd')
      .should('be.visible')
      .type(password)
      .should('have.value', password);
    return this;
  }
  clickSubmit() {
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=my-account'
    );
    cy.get('.page-heading').should('contain', 'My account');
  }
}
export default new Authentication();
