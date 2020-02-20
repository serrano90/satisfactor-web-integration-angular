import { TestBed } from '@angular/core/testing';

import { SatisfactorService } from './satisfactor.service';

describe('SatisfactorService', () => {
  let service: SatisfactorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SatisfactorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
