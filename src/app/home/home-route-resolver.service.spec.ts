import { TestBed } from '@angular/core/testing';

import { HomeRouteResolverService } from './home-route-resolver.service';

describe('HomeRouteResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeRouteResolverService = TestBed.get(HomeRouteResolverService);
    expect(service).toBeTruthy();
  });
});
