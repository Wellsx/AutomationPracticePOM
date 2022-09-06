import Data from '../support/data';
import HomePage from '../POM/pages/home_page';
import RegistrationPage from '../POM/pages/registration_page';
import Header from '../POM/components/Header';

describe('Registration', () => {
  it('Register a new male user', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    RegistrationPage.createAccount(Data.male_email)
      .select_Gender(Data.man)
      .input_FirstName(Data.male_firstName)
      .input_LastName(Data.male_lastName)
      .verify_Email(Data.male_email)
      .input_Password(Data.password)
      .verify_AddressFirstName(Data.male_firstName)
      .verify_AddressLastName(Data.male_lastName)
      .input_Address(Data.address)
      .input_City(Data.city)
      .select_State(Data.state)
      .input_Postcode(Data.postcode)
      .select_Country('United States')
      .input_PhoneNumber(Data.phoneNumber)
      .input_Alias(Data.address)
      .submitAccount();

    Data.save_email_male(Data.male_email);
  });
  it('Register a new female user', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    RegistrationPage.createAccount(Data.female_email)
      .select_Gender(Data.woman)
      .input_FirstName(Data.female_firstName)
      .input_LastName(Data.female_lastName)
      .verify_Email(Data.female_email)
      .input_Password(Data.password)
      .verify_AddressFirstName(Data.female_firstName)
      .verify_AddressLastName(Data.female_lastName)
      .input_Address(Data.address)
      .input_City(Data.city)
      .select_State(Data.state)
      .input_Postcode(Data.postcode)
      .select_Country('United States')
      .input_PhoneNumber(Data.phoneNumber)
      .input_Alias(Data.address)
      .submitAccount();

    Data.save_email_female(Data.female_email);
  });
});
