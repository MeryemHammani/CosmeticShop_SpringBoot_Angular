import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategorieComponent } from './all-categorie.component';

describe('AllCategorieComponent', () => {
  let component: AllCategorieComponent;
  let fixture: ComponentFixture<AllCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCategorieComponent]
    });
    fixture = TestBed.createComponent(AllCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
