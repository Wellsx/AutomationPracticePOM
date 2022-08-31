import 'cypress-real-events/support';
import topMenu from './POM/components/top-menu';
import homePage from './POM/pages/HomePage';

describe('Top menu test', () => {
  it('Test all hover menus', () => {
    homePage.visit_HomePage();
    topMenu
      .women()
      .womenBlouses()
      .womenTshirts()
      .dresses()
      .casualDresses()
      .eveningDresses()
      .summerDresses()
      .tshirts();
  });
});
