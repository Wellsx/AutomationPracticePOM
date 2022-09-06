import Header from '../../POM/components/Header';
import homePage from '../../POM/pages/home_page';
import ContactUs from '../../POM/pages/contact_us_page';
import Data from '../../support/data';

describe('Customer Service message test', () => {
  it('Typing a sample message and uploading an image', () => {
    homePage.visit_HomePage();
    Header.click_Contact_us();
    ContactUs.select_Customer_Service()
      .input_Email(Data.email)
      .input_Order_ID('12345')
      .upload_File('cypress/support/dress.jpg')
      .input_message('test 123 !@#')
      .submit_message();
  });
});
