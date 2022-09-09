import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import MyAccount from '../../POM/pages/my_account_page';
import Data from '../../support/data';

describe('User order history', () => {
  it('Login open order history and verify last order ', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.userPassword)
      .clickSubmit();
    MyAccount.click_Order_History().verify_Last_Order();
  });
});
