import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioIngredientComponent } from './bio-ingredient.component';

describe('BioIngredientComponent', () => {
  let component: BioIngredientComponent;
  let fixture: ComponentFixture<BioIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioIngredientComponent]
    });
    fixture = TestBed.createComponent(BioIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
