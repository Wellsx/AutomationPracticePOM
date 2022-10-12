import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';
import Address from '../../POM/pages/address_page';

describe('Update user address', () => {
  it('Login and update user address', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.lastEmail('male'))
      .enterPass(Data.password)
      .clickSubmit();
    Address.click_Update_Address()
      .update_Address()
      .input_New_Address(Data.address)
      .input_City(Data.city)
      .input_Postcode(Data.postcode)
      .select_State(Data.state)
      .input_HomePhoneNumber(Data.phoneNumber)
      .input_Alias(Data.address)
      .submit_Address()
      .verify_Updated_Address(Data.address);
  });
});
