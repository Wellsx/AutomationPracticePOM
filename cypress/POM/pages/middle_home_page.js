class MiddleHomePage {
  click_Product(name) {
    cy.get('.product-name').contains(name).should('be.visible').click();
    cy.get('h1').contains(name).should('be.visible');
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_product=2&controller=product'
    );
    return this;
  }

  click_Quick_View_Product(name) {
    cy.get('.product_img_link')
      .find('[title=' + '"' + name + '"' + ']')
      .should('be.visible')
      .realHover()
      .then(() => {
        cy.get('.quick-view').invoke('click').should('be.visible').click();
      });

    return this;
  }
  click_quick_view_2(name) {
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
