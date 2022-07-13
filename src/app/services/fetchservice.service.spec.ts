import { TestBed } from '@angular/core/testing';

import { FetchserviceService } from './fetchservice.service';

describe('FetchserviceService', () => {
  let service: FetchserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
