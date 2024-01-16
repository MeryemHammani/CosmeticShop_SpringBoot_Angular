import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlushComponent } from './add-flush.component';

describe('AddFlushComponent', () => {
  let component: AddFlushComponent;
  let fixture: ComponentFixture<AddFlushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFlushComponent]
    });
    fixture = TestBed.createComponent(AddFlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
