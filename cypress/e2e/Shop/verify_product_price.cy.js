import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductDetails from '../../POM/pages/product_details_page';
import Products from '../../fixtures/products.json';
import Users from '../../fixtures/automation_users.json';

describe('Verifying the product price', () => {
  it('Comparing homepage product price to product page price', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product(
      Products.Printed_Summer_Dress.name,
      Users.QA_John.name
    );
    ProductDetails.check_Product_Price(Users.QA_John.name);
  });
});
