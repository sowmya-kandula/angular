import { TestBed } from '@angular/core/testing';

import { CamdataService } from './camdata.service';

describe('CamdataService', () => {
  let service: CamdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
