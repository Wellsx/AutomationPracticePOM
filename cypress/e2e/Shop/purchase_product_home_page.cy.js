import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
import ProductDetails from '../../POM/pages/product_details_page';
import CheckoutModal from '../../POM/pages/shop/checkout_modal';
import Product from '../../fixtures/products.json';
import Users from '../../fixtures/automation_users.json';

describe('Purchasing a product from the homepage', () => {
  it('Purchasing an L size, White Blouse from the home page checking dynamic price', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product(Product.Blouse.name, Users.QA_John.name);
    ProductDetails.check_Product_Price(Users.QA_John.name);
    ProductPage.select_size(Product.Blouse.size_L)
      .click_MultiplePlusQuantity(1)
      .click_Color(Product.Blouse.color_White)
      .add_To_Cart();
    CheckoutModal.verify_checkout_modal()
      .check_price(Users.QA_John.name)
      .click_Proceed_to_checkout();
  });
});
