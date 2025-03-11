import { TestBed } from '@angular/core/testing';

import { RegisterObjectServiceService } from './register-object-service.service';

describe('RegisterObjectServiceService', () => {
  let service: RegisterObjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterObjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
