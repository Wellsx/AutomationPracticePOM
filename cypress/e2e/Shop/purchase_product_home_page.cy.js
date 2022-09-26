import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import ProductPage from '../../POM/pages/product_page';
describe('Purchasing a product from the homepage', () => {
  it('Purchasing 5, L size, White blouses', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_Product('Blouse');
    ProductPage.select_size('L')
      .click_MultiplePlusQuantity(5)
      .click_Color('White')
      .add_To_Cart();
  });
});
