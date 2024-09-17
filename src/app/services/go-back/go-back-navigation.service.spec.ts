import { TestBed } from '@angular/core/testing';

import { GoBackNavigationService } from './go-back-navigation.service';

describe('GoBackNavigationService', () => {
  let service: GoBackNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoBackNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
