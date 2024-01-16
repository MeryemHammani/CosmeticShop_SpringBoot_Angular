import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBioIngredientsComponent } from './add-bio-ingredients.component';

describe('AddBioIngredientsComponent', () => {
  let component: AddBioIngredientsComponent;
  let fixture: ComponentFixture<AddBioIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBioIngredientsComponent]
    });
    fixture = TestBed.createComponent(AddBioIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
