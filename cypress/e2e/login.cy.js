import signInPage from './pages/signInPage';
import Header from './components/header-component';

describe('Login', () => {
  it('Logs the user in', () => {
    const signIn = new signInPage();
    const header = new Header();

    header.visit();
    signIn.enterEmail();
    signIn.enterPass();
    signIn.clickSubmit();
  });
});
