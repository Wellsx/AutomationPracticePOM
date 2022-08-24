class Header {
  visit() {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
  }

  enterEmail() {
    cy.get('#email')
      .should('be.visible')
      .type(Data.email)
      .should('have.value', Data.email);
    return this;
  }
  enterPass() {
    cy.get('#passwd')
      .should('be.visible')
      .type(Data.password)
      .should('have.value', Data.password);
    return this;
  }
  clickSubmit() {
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should('include', 'controller=my-account');
    cy.get('.page-heading').should('contain', 'My account');
  }
}
export default Header;
