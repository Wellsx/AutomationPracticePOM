import Data from '../../support/data';
import HomePage from '../../POM/pages/home_page';
import RegistrationPage from '../../POM/pages/registration_page';
import Header from '../../POM/components/Header';

describe('Registration', () => {
  it('Register a new user with a new name and email', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    RegistrationPage.createAccount(Data.uniqueEmailAddress)
      .select_Gender(Data.man)
      .input_FirstName(Data.firstName)
      .input_LastName(Data.lastName)
      .input_NewEmail(Data.email)
      .input_Password(Data.password)
      .input_AddressFirstName(Data.new_firstName)
      .input_AddressLastName(Data.new_lastName)
      .input_Address(Data.address)
      .input_City(Data.city)
      .select_State(Data.state)
      .input_Postcode(Data.postcode)
      .select_Country('United States')
      .input_PhoneNumber(Data.phoneNumber)
      .input_Alias(Data.address)
      .submitAccount();
  });
});
