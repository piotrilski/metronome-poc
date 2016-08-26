export class MetronomePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('metronome-app h1')).getText();
  }
}
