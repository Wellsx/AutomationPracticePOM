import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
describe('Purchasing a product from the homepage', () => {
  it('Click on product from popular section and purchase it', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product('Blouse');
    ProductPage.select_size('M')
      .click_MultiplePlusQuantity(9)
      .click_Color('White')
      .add_To_Cart();
  });
});
