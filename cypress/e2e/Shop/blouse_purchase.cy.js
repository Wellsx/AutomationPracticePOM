import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import femaleUsers from '../../fixtures/female_users.json';
import Blouses from '../../POM/pages/shop/blouses_page';
import TopMenu from '../../POM/components/top-menu';
import Checkout from '../../POM/pages/shop/checkout_page';
import Cart from '../../POM/pages/shop/cart_page';
import 'cypress-real-events/support';

describe('Purchase an item as a logged in user', () => {
  it('Log in as a female user and purchase blouse', () => {
    HomePage.visit_HomePage();
    Header.click_SignIn_button();
    Authentication.enterEmail(
      femaleUsers.users[femaleUsers.users.length - 1].email
    );
    Authentication.enterPass('Pass123').clickSubmit();
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
