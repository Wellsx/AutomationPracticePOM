class Tshirts {
  buy_Tshirt() {
    cy.get('.product-name').should('be.visible').and('contain', 'T-shirts');
    cy.get('li').find('[title="Add to cart"]').should('be.visible').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    return this;
  }
}

export default new Tshirts();
