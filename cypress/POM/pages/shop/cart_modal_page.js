class Cart {
  click_Proceed_To_Checkout() {
    cy.get('#layer_cart')
      .find('[title="Proceed to checkout"]')
      .first()
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    return this;
  }
  close_Cart() {
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');
    return this;
  }
}
export default new Cart();
