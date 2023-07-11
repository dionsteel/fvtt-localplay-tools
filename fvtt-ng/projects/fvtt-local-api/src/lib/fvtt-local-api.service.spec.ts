import { TestBed } from '@angular/core/testing';

import { FvttLocalApiService } from './fvtt-local-api.service';

describe('FvttLocalApiService', () => {
  let service: FvttLocalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FvttLocalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
