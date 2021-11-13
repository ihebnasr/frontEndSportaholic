import { TestBed } from '@angular/core/testing';

import { BlocPartieService } from './bloc-partie.service';

describe('BlocPartieService', () => {
  let service: BlocPartieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocPartieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
