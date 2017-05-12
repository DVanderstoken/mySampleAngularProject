import { MyProject4Page } from './app.po';

describe('my-project4 App', () => {
  let page: MyProject4Page;

  beforeEach(() => {
    page = new MyProject4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
