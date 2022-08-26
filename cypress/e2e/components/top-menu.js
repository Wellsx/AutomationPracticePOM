class TopMenu {
  women() {
    cy.visit('/');
    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=3&controller=category'
    );
  }
  womenTshirts() {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="T-shirts"]').first().should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('contain', 'T-shirts');
  }
  womenBlouses() {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=7&controller=category'
    );
    cy.get('.category-name').should('contain', 'Blouses');
  }

  dresses() {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=8&controller=category'
    );
  }
  casualDresses() {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Casual Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=9&controller=category'
    );
    cy.get('.category-name').should('contain', 'Casual Dresses');
  }
  eveningDresses() {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Evening Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=10&controller=category'
    );
    cy.get('.category-name').should('contain', 'Evening Dresses');
  }
  summerDresses() {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Summer Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=11&controller=category'
    );
    cy.get('.category-name').should('contain', 'Summer Dresses');
  }
  tshirts() {
    cy.visit('/');
    cy.get('[title="T-shirts"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('contain', 'T-shirts');
  }
}
export default TopMenu;
