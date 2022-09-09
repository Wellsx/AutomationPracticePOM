import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import femaleUsers from '../../fixtures/female_users.json';

describe('Login', () => {
  it('Login as a newly registered female user', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(
      femaleUsers.users[femaleUsers.users.length - 1].email
    );
    Authentication.enterPass('Pass123').clickSubmit();
  });
});
