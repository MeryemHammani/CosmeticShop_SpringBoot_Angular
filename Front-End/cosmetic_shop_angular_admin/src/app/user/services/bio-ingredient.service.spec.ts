import { TestBed } from '@angular/core/testing';

import { BioIngredientService } from './bio-ingredient.service';

describe('BioIngredientService', () => {
  let service: BioIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
