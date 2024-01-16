import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubcategoryComponent } from './add-sous-categorie.component';

describe('AddSousCategorieComponent', () => {
  let component: AddSubcategoryComponent;
  let fixture: ComponentFixture<AddSubcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubcategoryComponent]
    });
    fixture = TestBed.createComponent(AddSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
