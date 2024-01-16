import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlushComponent } from './edit-flush.component';

describe('EditFlushComponent', () => {
  let component: EditFlushComponent;
  let fixture: ComponentFixture<EditFlushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFlushComponent]
    });
    fixture = TestBed.createComponent(EditFlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
