class HomePage {
  visit_HomePage() {
    cy.visit('/');
    cy.url().should('eq', Cypress.config().baseUrl + '/index.php');
  }
}
export default new HomePage();
