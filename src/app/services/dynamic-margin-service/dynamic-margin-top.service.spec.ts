import { TestBed } from '@angular/core/testing';

import { DynamicMarginTopService } from './dynamic-margin-top.service';

describe('DynamicMarginTopService', () => {
  let service: DynamicMarginTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicMarginTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
