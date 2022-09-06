import Authentication from '../../POM/pages/authentication_page';
import HomePage from '../../POM/pages/home_page';
import Blouse from '../../POM/pages/shop/blouses_page';
import TopMenu from '../../POM/components/top-menu';
import Data from '../../support/data';
import Wishlist from '../../POM/pages/wishlist_page';
import 'cypress-real-events/support';
import Header from '../../POM/components/Header';

describe('Adding an item to "My Wishlist"', () => {
  it('Login and add an item to wishlist', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.userEmail)
      .enterPass(Data.userPassword)
      .clickSubmit();
    TopMenu.visit_WomenBlouses();
    Blouse.click_Blouse();
    Wishlist.add_to_Wishlist().visit_Wishlist().verify_Wishlist();
  });
});
