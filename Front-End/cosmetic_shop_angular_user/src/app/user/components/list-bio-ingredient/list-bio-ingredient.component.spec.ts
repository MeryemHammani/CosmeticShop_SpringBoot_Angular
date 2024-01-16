import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBioIngredientComponent } from './list-bio-ingredient.component';

describe('ListBioIngredientComponent', () => {
  let component: ListBioIngredientComponent;
  let fixture: ComponentFixture<ListBioIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBioIngredientComponent]
    });
    fixture = TestBed.createComponent(ListBioIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
