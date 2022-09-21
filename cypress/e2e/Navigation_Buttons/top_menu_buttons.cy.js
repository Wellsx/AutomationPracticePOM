import 'cypress-real-events/support';
import topMenu from '../../POM/components/top-menu';
import homePage from '../../POM/pages/home_page';

describe('Top menu navigation button tests', () => {
  beforeEach(() => {
    homePage.visit_HomePage(Data.device);
  });

  it('Women menu button', () => {
    topMenu.visit_Women();
  });
  it('Blouses menu button', () => {
    topMenu.visit_WomenBlouses();
  });
  it('Women Tshirts button', () => {
    topMenu.visit_WomenTshirts();
  });
  it('Dresses menu button', () => {
    topMenu.visit_Dresses();
  });
  it('Casual Dresses menu button', () => {
    topMenu.visit_CasualDresses();
  });
  it('Evening Dresses menu button', () => {
    topMenu.visit_EveningDresses();
  });
  it('Summer Dresses menu button', () => {
    topMenu.visit_SummerDresses();
  });
  it('Tshirts menu button', () => {
    topmenu.visit_Tshirts();
  });
});
