import Authentication from '../../POM/pages/authentication_page';
import Header from '../../POM/components/Header';
import HomePage from '../../POM/pages/home_page';
import femaleUsers from '../../fixtures/female_users.json';
import Blouses from '../../POM/pages/shop/blouses_page';
import TopMenu from '../../POM/components/top-menu';
import Checkout from '../../POM/pages/shop/checkout_page';
import Cart from '../../POM/pages/shop/cart_page';
import EveningDresses from '../../POM/pages/shop/evening_dresses_page';
import 'cypress-real-events/support';

describe('Purchasing 2 items', () => {
  it('Purchase blouse and dress', () => {
    HomePage.visit_HomePage();
    TopMenu.visit_WomenBlouses();
    Blouses.buy_Blouse();
    Cart.close_Cart();
    TopMenu.visit_EveningDresses();
    EveningDresses.buy_PrintedDress();
    Cart.click_Proceed_To_Checkout();
    Checkout.summary_step_guest();
    Authentication.enterEmail(
      femaleUsers.users[femaleUsers.users.length - 1].email
    )
      .enterPass('Pass123')
      .clickSubmitCheckoutPage();
    Checkout.address_step()
      .check_terms_of_service()
      .payment_cheque()
      .shipping_step()
      .cheque_payment_confirm()
      .confirm_order();
  });
});
