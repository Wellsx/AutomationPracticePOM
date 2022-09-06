import 'cypress-real-events/support';
import topMenu from '../POM/components/top-menu';
import homePage from '../POM/pages/home_page';

describe('Top menu test', () => {
  it('Test all hover menus', () => {
    homePage.visit_HomePage();
    topMenu
      .visit_Women()
      .visit_WomenBlouses()
      .visit_WomenTshirts()
      .visit_Dresses()
      .visit_CasualDresses()
      .visit_EveningDresses()
      .visit_SummerDresses()
      .visit_Tshirts();
  });
});
