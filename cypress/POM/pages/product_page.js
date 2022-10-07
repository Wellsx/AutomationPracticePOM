class ProductPage {
  select_size(size) {
    cy.get('#group_1').select(size);
    cy.get('#uniform-group_1').find('span').should('have.text', size);

    return this;
  }

  click_OnePlusQuantity() {
    cy.get('span').find('.icon-plus').should('be.visible').click();

    cy.get('#quantity_wanted').should('have.value', 2);

    return this;
  }
  click_MultiplePlusQuantity(number) {
    for (let n = 1; n < number; n++) {
      cy.get('span').find('.icon-plus').should('be.visible').click();
    }

    cy.get('#quantity_wanted').should('have.value', number);
    return this;
  }

  click_Color(color) {
    cy.get('#color_to_pick_list')
      .find('[title=' + color + ']')
      .should('be.visible')
      .click();
    cy.get('#color_to_pick_list')
      .find('[title=' + color + ']')
      .should('be.visible')
      .and('have.class', 'color_pick selected');
    return this;
  }

  add_To_Cart() {
    cy.get('#add_to_cart').should('be.visible').click();

    return this;
  }
}
export default new ProductPage();
