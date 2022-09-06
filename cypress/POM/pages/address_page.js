class Address {
  click_Update_Address() {
    cy.get('[title="Addresses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=addresses'
    );
    return this;
  }
  click_Add_New_Address() {
    cy.get('[title="Add an address"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=address'
    );
    return this;
  }
  input_New_Address(address) {
    cy.get('#address1')
      .should('be.visible')
      .clear()
      .type(address)
      .should('have.value', address);
    return this;
  }
  input_City(city) {
    cy.get('#city')
      .should('be.visible')
      .clear()
      .type(city)
      .should('have.value', city);

    return this;
  }
  select_State(state) {
    cy.get('#id_state')
      .select(state)
      .then(() => {
        cy.get('#uniform-id_state').find('span').should('have.text', state);
      });
    return this;
  }

  input_Postcode(postcode) {
    cy.get('#postcode')
      .should('be.visible')
      .clear()
      .type(postcode)
      .should('have.value', postcode);

    return this;
  }
  input_HomePhoneNumber(homePhoneNumber) {
    cy.get('#phone')
      .should('be.visible')
      .clear()
      .type(homePhoneNumber)
      .should('have.value', homePhoneNumber);

    return this;
  }
  input_Alias(address) {
    cy.get('#alias')
      .should('be.visible')
      .clear()
      .type(address)
      .should('have.value', address);

    return this;
  }
  submit_Address() {
    cy.get('#submitAddress').should('be.visible').click();
    return this;
  }
  verify_New_Address() {
    cy.get('.alternate_item').should('be.visible');
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=addresses'
    );
    return this;
  }
  delete_Address() {
    cy.get('.last_item')
      .find('a')
      .eq(1)
      .should('contain', 'Delete')
      .and('be.visible')
      .click();
    return this;
  }
  update_Address() {
    cy.get('.last_item')
      .find('a')
      .eq(0)
      .should('contain', 'Update')
      .and('be.visible')
      .click();
    cy.url().should('contain', '/index.php?controller=address&id_address=');
    return this;
  }
  verify_Updated_Address(address) {
    cy.get('.page-subheading').should('contain', address).and('be.visible');
  }
}

export default new Address();
