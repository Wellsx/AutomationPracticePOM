import HomePage from '../../POM/pages/home_page';
import MiddleHomePage from '../../POM/pages/middle_home_page';
import Data from '../../support/data';
import 'cypress-real-events/support';
import QuickView from '../../POM/pages/quick_view_page';
describe('Purchasing a product from the homepage using quick view', () => {
  it('Purchasing 2, M size, white Blouses through quick view modal', () => {
    HomePage.visit_HomePage(Data.device);
    MiddleHomePage.click_quick_view_2('Blouse');
    QuickView.verify_QuickView('Blouse')
      .select_size('M')
      .click_Color('White')
      .click_On_Plus_Quantity(2)
      .add_To_Cart();
  });
});
