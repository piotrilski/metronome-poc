import { MetronomePage } from './app.po';

describe('metronome App', function() {
  let page: MetronomePage;

  beforeEach(() => {
    page = new MetronomePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('metronome works!');
  });
});
