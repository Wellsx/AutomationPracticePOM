import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
import ProductDetails from '../../POM/pages/product_details_page';
import CheckoutModal from '../../POM/pages/shop/checkout_modal';
import Product from '../../fixtures/products.json';
import Users from '../../fixtures/automation_users.json';

describe('Purchasing multiple products from the homepage', () => {
  it('Purchase 5, L size, T-shirts from the home page menu', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product(
      Product.Faded_Short_Sleeve_T_shirts.name,
      Users.QA_John.name
    );
    ProductDetails.check_Product_Price(Users.QA_John.name);
    ProductPage.select_size(Product.Faded_Short_Sleeve_T_shirts.size_L)
      .click_MultiplePlusQuantity(5)
      .add_To_Cart();
    CheckoutModal.verify_checkout_modal();
  });
});
