class ContactUs {
  select_Customer_Service() {
    cy.get('#id_contact').select('Customer service').should('have.value', '2');
    return this;
  }
  select_Webmaster() {
    cy.get('#id_contact').select('Webmaster').should('have.value', '1');
    return this;
  }
  input_Email(email) {
    cy.get('#email')
      .should('be.visible')
      .type(email)
      .should('have.value', email);
    return this;
  }
  input_Order_ID(orderID) {
    cy.get('#id_order')
      .should('be.visible')
      .type(orderID)
      .should('have.value', orderID);
    return this;
  }
  upload_File(filepath) {
    cy.get('#fileUpload').selectFile(filepath);
    return this;
  }
  input_message(text) {
    cy.get('#message').type(text);
    cy.get('#message').should('have.value', text);
    return this;
  }
  submit_message() {
    cy.get('#submitMessage').should('be.visible').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.text', 'Your message has been successfully sent to our team.');
    return this;
  }
}
export default new ContactUs();
