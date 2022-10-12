import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';
import Address from '../../POM/pages/address_page';

describe('Delete user address', () => {
  it('Login and delete user address', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.lastEmail('male'))
      .enterPass(Data.password)
      .clickSubmit();
    Address.click_Update_Address().delete_Address();
  });
});
