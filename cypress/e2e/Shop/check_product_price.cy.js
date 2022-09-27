import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductDetails from '../../POM/pages/product_details_page';

describe('Checking the product price', () => {
  it('Comparing homepage product price to product page price', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product('Faded Short Sleeve T-shirts', 'QA_John');
    ProductDetails.check_Product_Price('QA_John');
  });
});
