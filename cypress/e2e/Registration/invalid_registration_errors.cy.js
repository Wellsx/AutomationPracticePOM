import Data from '../../support/data';
import HomePage from '../../POM/pages/home_page';
import RegistrationPage from '../../POM/pages/registration_page';
import Header from '../../POM/components/Header';

describe('Registration error message test', () => {
  it('Registering a user without mandatory field inputs and verifying the error messages', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    RegistrationPage.createAccount(
      Data.uniqueEmailAddress
    ).verify_error_message();
  });
});
