import { TestBed } from '@angular/core/testing';

import { SayingsListResolverService } from './sayings-list-resolver.service';

describe('SayingsListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SayingsListResolverService = TestBed.get(SayingsListResolverService);
    expect(service).toBeTruthy();
  });
});
