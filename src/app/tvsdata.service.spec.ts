import { TestBed } from '@angular/core/testing';

import { TvsdataService } from './tvsdata.service';

describe('TvsdataService', () => {
  let service: TvsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
