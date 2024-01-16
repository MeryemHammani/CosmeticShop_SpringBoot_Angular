import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlushItemComponent } from './edit-flush-item.component';

describe('EditFlushItemComponent', () => {
  let component: EditFlushItemComponent;
  let fixture: ComponentFixture<EditFlushItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFlushItemComponent]
    });
    fixture = TestBed.createComponent(EditFlushItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
