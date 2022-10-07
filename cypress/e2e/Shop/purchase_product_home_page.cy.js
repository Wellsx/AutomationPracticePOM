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
    MiddleHomePage.click_Product('Blouse', 'QA_John');
    ProductDetails.check_Product_Price('QA_John');
    ProductPage.select_size('L')
      .click_MultiplePlusQuantity(1)
      .click_Color('White')
      .add_To_Cart();
    CheckoutModal.verify_checkout_modal()
      .check_price('QA_John')
      .click_Proceed_to_checkout();
  });
});

it.only('Purchasing an L size, Tshirt from the home page checking fixed price', () => {
  HomePage.visit_HomePage(Data.device);
  MiddleHomePage.click_Product(
    Product.Faded_Short_Sleeve_T_shirts.name,
    Users.QA_John.name
  );
  ProductPage.select_size(
    Product.Faded_Short_Sleeve_T_shirts.size_L
  ).add_To_Cart();
  ProductDetails.check_Fixed_Price(Product.Faded_Short_Sleeve_T_shirts.name);
  CheckoutModal.verify_checkout_modal().check_price(Users.QA_John.name);
});
