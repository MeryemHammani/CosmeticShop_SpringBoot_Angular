import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSousCategorieComponent } from './all-sous-categorie.component';

describe('AllSousCategorieComponent', () => {
  let component: AllSousCategorieComponent;
  let fixture: ComponentFixture<AllSousCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSousCategorieComponent]
    });
    fixture = TestBed.createComponent(AllSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
