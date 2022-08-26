import TopMenu from './components/top-menu';
import 'cypress-real-events/support';

describe('Top menu test', () => {
  it('Test all hover menus', () => {
    const topmenu = new TopMenu();

    topmenu.women();
    topmenu.womenTshirts();
    topmenu.womenBlouses();
    topmenu.dresses();
    topmenu.casualDresses();
    topmenu.eveningDresses();
    topmenu.summerDresses();
    topmenu.tshirts();
  });
});
