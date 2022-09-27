class ProductDetails {
  check_Product_Price(userName) {
    cy.get('#our_price_display')
      .invoke('text')
      .then((price) => {
        const finalPrice = price;
        cy.readFile('cypress/fixtures/automation_users.json').then(
          (records) => {
            records[userName].productPrice = finalPrice;
          }
        );
        expect(price).to.equal(finalPrice);
      });

    return this;
  }
}
export default new ProductDetails();
