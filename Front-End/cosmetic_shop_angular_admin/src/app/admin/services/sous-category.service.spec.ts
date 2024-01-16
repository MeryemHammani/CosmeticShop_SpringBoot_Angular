import { TestBed } from '@angular/core/testing';

import { SousCategoryService } from './sous-category.service';

describe('SousCategoryService', () => {
  let service: SousCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
