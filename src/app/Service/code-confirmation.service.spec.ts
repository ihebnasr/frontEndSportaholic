import { TestBed } from '@angular/core/testing';

import { CodeConfirmationService } from './code-confirmation.service';

describe('CodeConfirmationService', () => {
  let service: CodeConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
