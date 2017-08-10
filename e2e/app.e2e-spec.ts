import { InputOutputLecturePage } from './app.po';

describe('input-output-lecture App', () => {
  let page: InputOutputLecturePage;

  beforeEach(() => {
    page = new InputOutputLecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
