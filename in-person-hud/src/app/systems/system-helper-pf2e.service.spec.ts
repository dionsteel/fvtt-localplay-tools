import { TestBed } from '@angular/core/testing';

import { SystemHelperPF2eService } from './system-helper-pf2e.service';

describe('SystemHelperPF2eService', () => {
  let service: SystemHelperPF2eService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemHelperPF2eService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
