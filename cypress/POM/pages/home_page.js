class HomePage {
  visit_HomePage(device) {
    cy.viewport(device);
    cy.visit('/');
    cy.url().should('eq', Cypress.config().baseUrl + '/index.php');
  }
}
export default new HomePage();
