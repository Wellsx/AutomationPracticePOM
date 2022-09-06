class Register {
  createAccount(uniqueEmailAddress) {
    cy.get('#email_create')
      .should('be.visible')
      .type(uniqueEmailAddress)
      .should('have.value', uniqueEmailAddress);

    cy.get('#SubmitCreate').should('be.visible').click();

    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&back=my-account#account-creation'
    );
    return this;
  }

  select_Gender(gender) {
    cy.get('#id_gender' + '' + gender)
      .click()
      .parent()
      .should('be.visible')
      .and('have.class', 'checked');

    return this;
  }
  input_FirstName(firstName) {
    cy.get('#customer_firstname')
      .should('be.visible')
      .type(firstName)
      .should('have.value', firstName);

    return this;
  }

  input_LastName(lastName) {
    cy.get('#customer_lastname')
      .should('be.visible')
      .type(lastName)
      .should('have.value', lastName);

    return this;
  }

  verify_Email(uniqueEmailAddress) {
    cy.get('#email').should('be.visible').and('have.value', uniqueEmailAddress);

    return this;
  }

  input_NewEmail(new_Email) {
    cy.get('#email')
      .should('be.visible')
      .clear()
      .type(new_Email)
      .should('have.value', new_Email);

    return this;
  }

  input_Password(password) {
    cy.get('#passwd')
      .should('be.visible')
      .type(password)
      .should('have.value', password);

    return this;
  }

  input_AddressFirstName(new_firstName) {
    cy.get('#firstname')
      .should('be.visible')
      .clear()
      .type(new_firstName)
      .should('have.value', new_firstName);

    return this;
  }

  input_AddressLastName(address_lastName) {
    cy.get('#lastname')
      .should('be.visible')
      .clear()
      .type(address_lastName)
      .should('have.value', address_lastName);

    return this;
  }

  verify_AddressFirstName(address_firstName) {
    cy.get('#firstname')
      .should('be.visible')
      .and('have.value', address_firstName);

    return this;
  }
  verify_AddressLastName(address_lastName) {
    cy.get('#lastname')
      .should('be.visible')
      .and('have.value', address_lastName);

    return this;
  }

  input_Address(address) {
    cy.get('#address1')
      .should('be.visible')
      .type(address)
      .should('have.value', address);

    return this;
  }

  input_City(city) {
    cy.get('#city').should('be.visible').type(city).should('have.value', city);

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
      .type(postcode)
      .should('have.value', postcode);

    return this;
  }

  select_Country() {
    cy.get('#id_country').select('United States').should('have.value', '21');

    return this;
  }

  input_PhoneNumber(phoneNumber) {
    cy.get('#phone_mobile')
      .should('be.visible')
      .type(phoneNumber)
      .should('have.value', phoneNumber);

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

  submitAccount() {
    cy.get('#submitAccount').should('be.visible').click();
    cy.url().should('contain', 'controller=my-account');
    cy.get('.logout').should('be.visible');

    return this;
  }
  verify_error_message() {
    cy.get('#submitAccount').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=authentication'
    );

    cy.get('#center_column')
      .should('be.visible')
      .and('contain', 'There are 8 errors');
    cy.get('ol')
      .children()
      .should('be.visible')
      .and('contain', 'You must register at least one phone number.')
      .and('contain', 'lastname is required.')
      .and('contain', 'firstname is required.')
      .and('contain', 'passwd is required.')
      .and('contain', 'address1 is required.')
      .and('contain', 'city is required.')
      .and(
        'contain',
        "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
      )
      .and('contain', 'This country requires you to choose a State.');
    return this;
  }
}
export default new Register();
