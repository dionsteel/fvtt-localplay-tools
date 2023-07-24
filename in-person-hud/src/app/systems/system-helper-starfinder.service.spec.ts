import { TestBed } from '@angular/core/testing';

import { SystemHelperStarfinderService } from './system-helper-starfinder.service';

describe('SystemHelperStarfinderService', () => {
  let service: SystemHelperStarfinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemHelperStarfinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
