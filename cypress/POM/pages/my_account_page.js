class MyAccount {
  click_Personal_Information() {
    cy.get('[title="Information"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=identity'
    );

    return this;
  }
  input_FirstName(firstName) {
    cy.get('#firstname')
      .should('be.visible')
      .clear()
      .type(firstName)
      .should('have.value', firstName);
    return this;
  }
  input_LastName(lastName) {
    cy.get('#lastname')
      .should('be.visible')
      .clear()
      .type(lastName)
      .should('have.value', lastName);
    return this;
  }
  input_currentPassword(password) {
    cy.get('#old_passwd')
      .should('be.visible')
      .type(password)
      .should('have.value', password);
    return this;
  }
  click_Save() {
    cy.get('[name="submitIdentity"]').should('be.visible').click();

    return this;
  }
  verify_Personal_Information() {
    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Your personal information');
    cy.get('.alert')
      .should('be.visible')
      .and(
        'contain',
        'Your personal information has been successfully updated.'
      );
    return this;
  }
  click_Order_History() {
    cy.get('[title="Orders"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=history'
    );
    return this;
  }
  verify_Last_Order() {
    cy.get('.first_item ')
      .find('.color-myaccount')
      .first()
      .should('be.visible')
      .click();
    cy.get('#block-order-detail').should('exist');
    return this;
  }
}

export default new MyAccount();
