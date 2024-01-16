import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSousCategorieComponent } from './edit-sous-categorie.component';

describe('EditSousCategorieComponent', () => {
  let component: EditSousCategorieComponent;
  let fixture: ComponentFixture<EditSousCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSousCategorieComponent]
    });
    fixture = TestBed.createComponent(EditSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
