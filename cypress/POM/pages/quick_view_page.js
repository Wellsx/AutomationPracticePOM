class QuickView {
  verify_QuickView(name) {
    cy.frameLoaded('.fancybox-iframe').then(() => {
      cy.iframe('.fancybox-iframe')
        .find('h1')
        .contains(name)
        .should('be.visible');
    });
    return this;
  }
  select_size(size) {
    cy.frameLoaded('.fancybox-iframe');

    cy.iframe('.fancybox-iframe')
      .find('#group_1')
      .should('exist')
      .select(size, { force: true })
      .then(() => {
        cy.frameLoaded('.fancybox-iframe');

        cy.iframe('.fancybox-iframe')
          .find('#uniform-group_1')
          .children('span')
          .should('have.text', size);
      });

    return this;
  }

  click_On_Plus_Quantity(quantity) {
    for (let n = 1; n < quantity; n++) {
      cy.frameLoaded('.fancybox-iframe');
      cy.iframe('.fancybox-iframe')
        .find('span')
        .children('.icon-plus')
        .should('be.visible')
        .click();
    }
    cy.frameLoaded('.fancybox-iframe');
    cy.iframe('.fancybox-iframe')
      .find('#quantity_wanted')
      .should('have.value', quantity);

    return this;
  }

  click_Color(color) {
    cy.frameLoaded('.fancybox-iframe');
    cy.iframe('.fancybox-iframe')
      .find('#color_to_pick_list')
      .children('li')
      .children('[title=' + '"' + color + '"' + ']')
      .should('be.visible')
      .click()
      .then(() => {
        cy.frameLoaded('.fancybox-iframe');
        cy.iframe('.fancybox-iframe')
          .find('#color_to_pick_list')
          .children('li')
          .children('[title=' + '"' + color + '"' + ']')
          .should('be.visible')
          .and('have.class', 'color_pick selected');
      });
    return this;
  }

  add_To_Cart() {
    cy.frameLoaded('.fancybox-iframe');
    cy.iframe('.fancybox-iframe')
      .find('#add_to_cart')
      .should('be.visible')
      .click()
      .then(() => {
        cy.get('h2')
          .should('be.visible')
          .and('contain', 'Product successfully added to your shopping cart');
      });
    return this;
  }
}
export default new QuickView();
