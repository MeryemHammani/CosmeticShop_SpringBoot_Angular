import { TestBed } from '@angular/core/testing';

import { SliderServiceService } from './slider-service.service';

describe('SliderServiceService', () => {
  let service: SliderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
