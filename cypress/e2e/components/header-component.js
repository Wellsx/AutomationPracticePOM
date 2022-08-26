class Header {
  login() {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
  }
}
export default Header;

class Women {
  womenMenu() {cy.visit('/');

    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=3&controller=category'
    );
  }
}
export default Women;
