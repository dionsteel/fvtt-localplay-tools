import { TestBed } from '@angular/core/testing';

import { FvttApiBridgeService } from './fvtt-api-bridge.service';

describe('FvttApiBridgeService', () => {
  let service: FvttApiBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FvttApiBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
