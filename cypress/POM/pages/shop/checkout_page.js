class Checkout {
  summary_step() {
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    cy.get('.cart_navigation')
      .find('[title="Proceed to checkout"]')
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order&step=1'
    );
    return this;
  }

  summary_step_guest() {
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    cy.get('.cart_navigation')
      .find('[title="Proceed to checkout"]')
      .should('be.visible')
      .click();
    cy.url().should(
      'contain',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&multi-shipping=0&display_guest_checkout'
    );
    return this;
  }

  address_step() {
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    return this;
  }

  check_terms_of_service() {
    cy.get('#cgv').click();
    cy.get('#cgv').should('be.checked');
    return this;
  }

  shipping_step() {
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order&multi-shipping='
    );
    return this;
  }

  payment_bankwire() {
    cy.get('.bankwire').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=bankwire&controller=payment'
    );
    return this;
  }

  payment_cheque() {
    cy.get('.cheque').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=cheque&controller=payment'
    );
    return this;
  }

  bankwire_payment_confirm() {
    cy.get('.page-subheading')
      .should('be.visible')
      .and('contain', ' Bank-wire payment.');
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    return this;
  }

  cheque_payment_confirm() {
    cy.get('.page-subheading').should('be.visible');
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    return this;
  }

  confirm_order() {
    cy.url().should('contain', '/index.php?controller=order-confirmation');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert alert-success');
    return this;
  }
}

export default new Checkout();
