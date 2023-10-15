import { TestBed } from '@angular/core/testing';

import { SelfflashedService } from './selfflashed.service';

describe('SelfflashedService', () => {
  let service: SelfflashedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfflashedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
