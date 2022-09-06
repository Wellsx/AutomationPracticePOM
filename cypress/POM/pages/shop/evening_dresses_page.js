class EveningDresses {
  buy_PrintedDress() {
    cy.get('.category-name')
      .should('be.visible')
      .and('contain', 'Evening Dresses');
    cy.get('.ajax_block_product')
      .should('be.visible')
      .and('contain', 'Printed Dress');
    cy.get('.ajax_add_to_cart_button > span').should('be.visible').click();
    return this;
  }
}
export default new EveningDresses();
