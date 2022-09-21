import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';

describe('Login', () => {
  it('Login as a newly registered female user', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.lastEmail('female'));
    Authentication.enterPass(Data.password).clickSubmit();
  });
});
