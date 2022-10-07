class CheckoutModal {
  verify_checkout_modal() {
    cy.get('#layer_cart')
      .find('h2')
      .contains('Product successfully added to your shopping cart')
      .should('be.visible');

    cy.get('#layer_cart').find('.icon-ok').should('be.visible');
    return this;
  }

  check_price(userName) {
    cy.get('#layer_cart')
      .find('.ajax_block_products_total')
      .prev()
      .contains('Total products')
      .should('be.visible')
      .next()
      .invoke('text')
      .then((price) => {
        const price1 = price.trim().split('$');
        const price2 = price1[1];
        const finalPrice = price2;

        cy.readFile('cypress/fixtures/automation_users.json').then(
          (records) => {
            const originalPrice = records[userName].productPrice;

            expect(finalPrice).to.equal(originalPrice);
          }
        );
        cy.get('#layer_cart')
          .find('.ajax_cart_shipping_cost')
          .prev()
          .contains('Total shipping')
          .should('be.visible')
          .next()
          .invoke('text')
          .then((price) => {
            const price1 = price.trim().split('$');
            const price2 = price1[1];
            const shippingPrice = price2;

            cy.get('#layer_cart')
              .find('.ajax_block_cart_total')
              .prev()
              .contains('Total')
              .should('be.visible')
              .next()
              .invoke('text')
              .then((price) => {
                const price1 = price.trim().split('$');
                const price2 = price1[1];
                const totalPrice = price2;

                const finalPrice_number = parseFloat(finalPrice);
                const shippingPrice_number = parseFloat(shippingPrice);
                const totalPrice_number = parseFloat(totalPrice);

                expect(totalPrice_number).to.equal(
                  shippingPrice_number + finalPrice_number
                );

                cy.get('#layer_cart')
                  .find('.ajax_block_cart_total')
                  .prev()
                  .contains('Total')
                  .should('be.visible')
                  .next()
                  .contains('$' + totalPrice)
                  .should('be.visible');
              });
          });
      });

    return this;
  }

  click_Proceed_to_checkout() {
    cy.get('.button-container')
      .find('[title="Proceed to checkout"]')
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    return this;
  }
}
export default new CheckoutModal();
