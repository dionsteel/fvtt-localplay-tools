import { TestBed } from '@angular/core/testing';

import { SystemHelperDND5eService } from './system-helper-dnd5e.service';

describe('SystemHelperDND5eService', () => {
  let service: SystemHelperDND5eService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemHelperDND5eService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
