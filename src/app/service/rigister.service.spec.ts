import { TestBed } from '@angular/core/testing';

import { RigisterService } from './rigister.service';

describe('RigisterService', () => {
  let service: RigisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RigisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
