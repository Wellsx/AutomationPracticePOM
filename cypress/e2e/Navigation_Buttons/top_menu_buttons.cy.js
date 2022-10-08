import 'cypress-real-events/support';
import TopMenu from '../../POM/components/top-menu';
import HomePage from '../../POM/pages/home_page';

describe('Top menu navigation button tests', () => {
  beforeEach(() => {
    HomePage.visit_HomePage(Data.device);
  });

  it('Women menu button', () => {
    TopMenu.visit_Women();
  });
  it('Blouses menu button', () => {
    TopMenu.visit_WomenBlouses();
  });
  it('Women Tshirts button', () => {
    TopMenu.visit_WomenTshirts();
  });
  it('Dresses menu button', () => {
    TopMenu.visit_Dresses();
  });
  it('Casual Dresses menu button', () => {
    TopMenu.visit_CasualDresses();
  });
  it('Evening Dresses menu button', () => {
    TopMenu.visit_EveningDresses();
  });
  it('Summer Dresses menu button', () => {
    TopMenu.visit_SummerDresses();
  });
  it('Tshirts menu button', () => {
    TopMenu.visit_Tshirts();
  });
});
