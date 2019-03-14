import { TestBed } from '@angular/core/testing';

import { SayingsService } from './sayings.service';

describe('SayingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SayingsService = TestBed.get(SayingsService);
    expect(service).toBeTruthy();
  });
});
