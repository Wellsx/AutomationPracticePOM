import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import Blouses from '../../POM/pages/shop/blouses_page';
import TopMenu from '../../POM/components/top-menu';
import Checkout from '../../POM/pages/shop/checkout_page';
import Cart from '../../POM/pages/shop/cart_modal_page';
import Data from '../../support/data';
import 'cypress-real-events/support';

describe('Purchase an item as a logged in user', () => {
  it('Log in as a female user and purchase blouse', () => {
    HomePage.visit_HomePage(Data.device);
    Header.click_SignIn_button();
    Authentication.enterEmail(Data.female_email);
    Authentication.enterPass(Data.password).clickSubmit();
    TopMenu.visit_WomenBlouses();
    Blouses.buy_Blouse();
    Cart.click_Proceed_To_Checkout();
    Checkout.summary_step()
      .address_step()
      .check_terms_of_service()
      .shipping_step()
      .payment_bankwire()
      .bankwire_payment_confirm()
      .confirm_order();
  });
});
