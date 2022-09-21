import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import 'cypress-real-events/support';
import QuickView from '../../POM/pages/quick_view_page';
describe('Purchasing a product from the homepage using quick view', () => {
  it('Hover on a product and click quick view', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_quick_view_2('Blouse');
    QuickView.click_Plus_QuantityMultiple(5);
  });
});
