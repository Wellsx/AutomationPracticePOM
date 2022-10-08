import Authentication from '../../POM/pages/authentication_page';
import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import Wishlist from '../../POM/pages/wishlist_page';
import Header from '../../POM/components/Header';
import Users from '../../fixtures/automation_users.json';
import Product from '../../fixtures/products.json';
import 'cypress-real-events/support';

describe('Adding an item to "My Wishlist"', () => {
  it('Login and add an item to wishlist and verify wishlist', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.userPassword)
      .clickSubmit();
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product(Product.Blouse.name, Users.QA_John.name);
    Wishlist.add_to_Wishlist().visit_Wishlist().verify_Wishlist();
  });
});
