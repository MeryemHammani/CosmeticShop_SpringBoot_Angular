import { TestBed } from '@angular/core/testing';

import { BioIngredientsService } from './bio-ingredients.service';

describe('BioIngredientsService', () => {
  let service: BioIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
