import { TestBed } from '@angular/core/testing';

import { SystemHelperDCCService } from './system-helper-dcc.service';

describe('SystemHelperDCCService', () => {
  let service: SystemHelperDCCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemHelperDCCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
