import { CraigGreenPage } from './app.po';

describe('craig-green App', () => {
  let page: CraigGreenPage;

  beforeEach(() => {
    page = new CraigGreenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
