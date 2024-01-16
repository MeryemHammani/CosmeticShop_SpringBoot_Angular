import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBioIngredientsComponent } from './all-bio-ingredients.component';

describe('AllBioIngredientsComponent', () => {
  let component: AllBioIngredientsComponent;
  let fixture: ComponentFixture<AllBioIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBioIngredientsComponent]
    });
    fixture = TestBed.createComponent(AllBioIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
