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
  clickSubmitCheckoutPage() {
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=order&step=1&multi-shipping=0'
    );
  }

  click_Submit_and_verify_error() {
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=authentication'
    );
    cy.get('#center_column')
      .should('be.visible')
      .and('contain', 'There is 1 error');
    cy.get('ol').should('be.visible').and('contain', 'Authentication failed.');
  }
}

export default new Authentication();
