class Wishlist {
  add_to_Wishlist() {
    cy.get('#wishlist_button').should('be.visible').click();
    cy.get('.fancybox-error')
      .should('be.visible')
      .and('contain', 'Added to your wishlist.');
    cy.get('.fancybox-item').should('be.visible').click();
    return this;
  }
  visit_Wishlist() {
    cy.get('.account').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=my-account'
    );
    cy.get('.lnk_wishlist').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=blockwishlist&controller=mywishlist'
    );
    return this;
  }
  verify_Wishlist() {
    cy.get('#block-history').should('exist').and('be.visible');
    return this;
  }
}

export default new Wishlist();
