class Blouses {
  buy_Blouse() {
    cy.get('.product-name').should('be.visible').and('contain', 'Blouse');
    cy.get('li').find('[title="Add to cart"]').should('be.visible').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    return this;
  }
  click_Blouse() {
    cy.get('h5')
      .find('[title="Blouse"]')
      .should('be.visible')
      .and('contain', 'Blouse')
      .click();
  }
}
export default new Blouses();
