import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryComponent } from './edit-categorie.component';

describe('EditCategorieComponent', () => {
  let component: EditCategoryComponent;
  let fixture: ComponentFixture<EditCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCategoryComponent]
    });
    fixture = TestBed.createComponent(EditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
