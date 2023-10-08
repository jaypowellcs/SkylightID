import { TestBed } from '@angular/core/testing';

import { CurbmountService } from '../Services/curbmount.service';

describe('CurbmountService', () => {
  let service: CurbmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurbmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
