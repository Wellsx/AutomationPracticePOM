import Authentication from '../../POM/pages/authentication_page';
import HomePage from '../../POM/pages/home_page';
import TopMenu from '../../POM/components/top-menu';
import Checkout from '../../POM/pages/shop/checkout_page';
import Cart from '../../POM/pages/shop/cart_modal_page';
import EveningDresses from '../../POM/pages/shop/evening_dresses_page';
import Data from '../../support/data';
import 'cypress-real-events/support';

describe('Purchasing a dress', () => {
  it('Purchase a dress and logging in', () => {
    HomePage.visit_HomePage(Data.device);
    TopMenu.visit_EveningDresses();
    EveningDresses.buy_PrintedDress();
    Cart.click_Proceed_To_Checkout();
    Checkout.summary_step_guest();
    Authentication.enterEmail(Data.female_email)
      .enterPass(Data.password)
      .clickSubmitCheckoutPage();
    Checkout.address_step()
      .check_terms_of_service()
      .shipping_step()
      .payment_cheque()
      .cheque_payment_confirm()
      .confirm_order();
  });
});
