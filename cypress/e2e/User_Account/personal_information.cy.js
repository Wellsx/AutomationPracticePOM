import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import MyAccount from '../../POM/pages/my_account_page';
import Data from '../../support/data';
describe('My personal information page', () => {
  it('My personal information button and page test', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.userPassword)
      .clickSubmit();
    MyAccount.click_Personal_Information()
      .input_FirstName(Data.firstName)
      .input_LastName(Data.lastName)
      .input_currentPassword(Data.userPassword)
      .click_Save()
      .verify_Personal_Information();
  });
});
