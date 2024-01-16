import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBioIngredientsComponent } from './edit-bio-ingredients.component';

describe('EditBioIngredientsComponent', () => {
  let component: EditBioIngredientsComponent;
  let fixture: ComponentFixture<EditBioIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBioIngredientsComponent]
    });
    fixture = TestBed.createComponent(EditBioIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
