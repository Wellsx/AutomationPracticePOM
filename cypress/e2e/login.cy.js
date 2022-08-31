import Authentication from '../e2e/POM/pages/Authentication';
import Header from './POM/components/Header';
import HomePage from './POM/pages/HomePage';

describe('Login', () => {
  it('Logs the user in', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail('test456123@email23.com')
      .enterPass('123456')
      .clickSubmit();
  });
});
