import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCategoriesComponent } from './faq-categories.component';

describe('FaqCategoriesComponent', () => {
  let component: FaqCategoriesComponent;
  let fixture: ComponentFixture<FaqCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqCategoriesComponent]
    });
    fixture = TestBed.createComponent(FaqCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
