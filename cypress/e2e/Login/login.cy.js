import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';

describe('Login', () => {
  it('Logs the user in', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail('test456123@email23.com')
      .enterPass('123456')
      .clickSubmit();
  });
});
