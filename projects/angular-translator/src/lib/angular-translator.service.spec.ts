import { TestBed } from '@angular/core/testing';

import { AngularTranslatorService } from './angular-translator.service';

describe('AngularTranslatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTranslatorService = TestBed.get(AngularTranslatorService);
    expect(service).toBeTruthy();
  });
});
