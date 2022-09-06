import Authentication from '../POM/pages/authentication_page';
import Header from '../POM/components/Header';
import HomePage from '../POM/pages/home_page';
import maleUsers from '../fixtures/male_users.json';

describe('Login', () => {
  it('Logs the user in', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(
      maleUsers.users[maleUsers.users.length - 1].email
    );
    Authentication.enterPass('Pass123').clickSubmit();
  });
});
