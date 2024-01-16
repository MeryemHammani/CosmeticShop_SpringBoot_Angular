import { TestBed } from '@angular/core/testing';

import { FaqServiceService } from './faq-service.service';

describe('FaqServiceService', () => {
  let service: FaqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
