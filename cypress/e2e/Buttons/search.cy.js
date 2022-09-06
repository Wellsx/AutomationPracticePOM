import topMenu from '../../POM/components/top-menu';
import homePage from '../../POM/pages/home_page';

describe('Search function', () => {
  it('Search for an item using the search bar', () => {
    homePage.visit_HomePage();
    topMenu.search('Dress');
  });
});
