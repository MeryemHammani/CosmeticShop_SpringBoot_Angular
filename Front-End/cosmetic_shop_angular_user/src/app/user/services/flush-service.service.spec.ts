import { TestBed } from '@angular/core/testing';

import { FlushServiceService } from './flush-service.service';

describe('FlushServiceService', () => {
  let service: FlushServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlushServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
