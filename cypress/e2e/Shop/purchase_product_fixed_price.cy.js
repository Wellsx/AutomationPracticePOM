import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
import ProductDetails from '../../POM/pages/product_details_page';
import CheckoutModal from '../../POM/pages/shop/checkout_modal';
import Product from '../../fixtures/products.json';
import Users from '../../fixtures/automation_users.json';

describe('Purchasing a product and checking its fixed price', () => {
  it('Purchasing an L size, T-shirt from the home page and checking its fixed price', () => {
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
});
