class MiddleHomePage {
  click_Product(productName, userName) {
    cy.get('.product-name')
      .contains(productName)
      .should('be.visible')
      .parents('.right-block')
      .find('[itemprop="offers"]')
      .invoke('text')
      .then((price) => {
        const price1 = price.trim().split(' ');
        const price2 = price1[0];
        const price3 = price2.split('$');
        const price4 = price3[1];
        const finalPrice = price4.match(/[+-]?\d+(\.\d+)?/g).join('');

        cy.readFile('cypress/fixtures/automation_users.json').then(
          (records) => {
            records[userName].productPrice = finalPrice;
            cy.writeFile('cypress/fixtures/automation_users.json', records);
          }
        );
      });
    cy.get('.product-name')
      .contains(productName)
      .should('be.visible')
      .click()
      .then(() => {
        cy.get('h1').contains(productName).should('be.visible');
        cy.url().should(
          'contain',
          Cypress.config().baseUrl + '/index.php?id_product='
        );
      });
    return this;
  }

  click_Quick_View(name) {
    cy.get('.product-image-container')
      .find('[title=' + '"' + name + '"' + ']')
      .should('be.visible')
      .realHover()
      .siblings('.quick-view')
      .should('be.visible')
      .find('span')
      .first()
      .and('be.visible')
      .click();
  }
}
export default new MiddleHomePage();
