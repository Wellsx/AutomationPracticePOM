class QuickView {
  click_Plus_QuantityMultiple(number) {
    for (let n = 1; n < number; n++) {
      // cy.xpath('//i[@class="icon-plus"]').should('be.visible').click();

      cy.get('#quantity_wanted_p').then(() => {
        cy.get('span').find('.icon-plus').should('be.visible').click();
      });
    }

    cy.get('#quantity_wanted').should('have.value', number);
    return this;
  }
}
export default new QuickView();
