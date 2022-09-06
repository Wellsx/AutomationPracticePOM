class TopMenu {
  visit_Women() {
    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=3&controller=category'
    );

    return this;
  }
  visit_WomenTshirts() {
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="T-shirts"]').first().should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('contain', 'T-shirts');

    return this;
  }
  visit_WomenBlouses() {
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=7&controller=category'
    );
    cy.get('.category-name').should('contain', 'Blouses');

    return this;
  }

  visit_Dresses() {
    cy.get('[title="Dresses"]').eq(1).click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=8&controller=category'
    );

    return this;
  }
  visit_CasualDresses() {
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Casual Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=9&controller=category'
    );
    cy.get('.category-name').should('contain', 'Casual Dresses');

    return this;
  }
  visit_EveningDresses() {
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Evening Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=10&controller=category'
    );
    cy.get('.category-name').should('contain', 'Evening Dresses');

    return this;
  }
  visit_SummerDresses() {
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Summer Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=11&controller=category'
    );
    cy.get('.category-name').should('contain', 'Summer Dresses');

    return this;
  }
  visit_Tshirts() {
    cy.get('[title="T-shirts"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('contain', 'T-shirts');

    return this;
  }

  search(search) {
    cy.visit('/');
    cy.get('#search_query_top')
      .should('be.visible')
      .clear()
      .type(search)
      .type('{enter}')
      .should('have.value', search);

    cy.url().should('eq', Cypress.config().baseUrl + 'controller=search');
    cy.get('.navigation_page').should('be.visible').and('have.text', 'Search');
    cy.get('.lighter').should('be.visible').and('contain', search);
    return this;
  }
}
export default new TopMenu();
