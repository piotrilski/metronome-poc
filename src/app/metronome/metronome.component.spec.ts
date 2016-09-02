import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MetronomeAppComponent } from '../../app/metronome/metronome.component';

beforeEachProviders(() => [MetronomeAppComponent]);

describe('App: Metronome', () => {
  it('should create the app',
      inject([MetronomeAppComponent], (app: MetronomeAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
