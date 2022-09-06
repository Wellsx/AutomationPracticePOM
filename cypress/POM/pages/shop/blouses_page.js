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
}
export default new Blouses();
