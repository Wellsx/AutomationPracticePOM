import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
import ProductDetails from '../../POM/pages/product_details_page';

describe('Purchasing a product from the homepage', () => {
  it('Purchasing 2, L size, White blouses', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product('Blouse', 'QA_John');
    ProductDetails.check_Product_Price('QA_John');
    ProductPage.select_size('L')
      .click_MultiplePlusQuantity(2)
      .click_Color('White')
      .add_To_Cart();
  });
});
