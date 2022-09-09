import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';

describe('Login', () => {
  it('Logs the user in with wrong credentials and verifies the error message', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.password)
      .verify_error();
  });
});
