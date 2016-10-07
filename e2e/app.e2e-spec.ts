import { CraigAGreenPage } from './app.po';

describe('craig-a-green App', function() {
  let page: CraigAGreenPage;

  beforeEach(() => {
    page = new CraigAGreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
