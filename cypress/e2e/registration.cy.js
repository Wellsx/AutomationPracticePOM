import Header from './components/header-component';
import registrationPage from './pages/registrationPage';
import Data from '../support/data';

describe('Registration', () => {
  it('Register a new user', () => {
    const register = new registrationPage();
    const header = new Header();

    header.visit();
    register.createAccount(Data.uniqueEmailAddress);
    register.inputFirstName(Data.firstName);
    register.inputLastName(Data.lastName);
    register.verifyEmail(Data.uniqueEmailAddress);
    register.inputPassword(Data.password);
    register.inputNewFirstName(Data.new_firstName);
    register.verifyLastName(Data.lastName);
    register.inputAddress(Data.address);
    register.inputCity(Data.city);
    register.selectState(Data.state);
    register.inputPostcode(Data.postcode);
    register.selectCountry('United States');
    register.inputPhoneNumber(Data.phoneNumber);
    register.inputAlias(Data.address);
    register.submitAccount();
  });
});
