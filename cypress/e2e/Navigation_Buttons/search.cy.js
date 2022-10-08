import TopMenu from '../../POM/components/top-menu';
import HomePage from '../../POM/pages/home_page';
import Data from '../../support/data';

describe('Search function', () => {
  it('Search for an item using the search bar', () => {
    HomePage.visit_HomePage(Data.device);
    TopMenu.search('Dress');
  });
});
