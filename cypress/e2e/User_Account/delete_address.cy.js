import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';
import Address from '../../POM/pages/address_page';

describe('Delete user address', () => {
  it('Login and add a new user address', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.userPassword)
      .clickSubmit();
    Address.click_Update_Address().delete_Address();
  });
});
