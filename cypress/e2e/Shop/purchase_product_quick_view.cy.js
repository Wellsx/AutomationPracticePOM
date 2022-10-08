import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import 'cypress-real-events/support';
import QuickView from '../../POM/pages/quick_view_page';
import CheckoutModal from '../../POM/pages/shop/checkout_modal';
import Product from '../../fixtures/products.json';
import Users from '../../fixtures/automation_users.json';
import Checkout from '../../POM/pages/shop/checkout_page';
import Authentication from '../../POM/pages/authentication_page';

describe('Purchasing a product from the homepage using quick view', () => {
  it('Purchasing M size, white Blouses through quick view modal', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Quick_View(Product.Blouse.name, Users.QA_John.name);
    QuickView.verify_QuickView(Product.Blouse.name)
      .select_size(Product.Blouse.size_M)
      .click_Color(Product.Blouse.color_White)
      .click_On_Plus_Quantity(1)
      .add_To_Cart();
    CheckoutModal.verify_checkout_modal()
      .check_price(Users.QA_John.name)
      .click_Proceed_to_checkout();
    Checkout.summary_step_guest();
    Authentication.enterEmail(Data.lastEmail('female'))
      .enterPass(Data.password)
      .clickSubmitCheckoutPage();
    Checkout.address_step()
      .check_terms_of_service()
      .shipping_step()
      .payment_cheque()
      .cheque_payment_confirm()
      .confirm_order_cheque();
  });
});
