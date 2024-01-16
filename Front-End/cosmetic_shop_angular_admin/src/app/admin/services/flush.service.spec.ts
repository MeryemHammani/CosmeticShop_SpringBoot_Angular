import { TestBed } from '@angular/core/testing';

import { FlushService } from './flush.service';

describe('FlushService', () => {
  let service: FlushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
