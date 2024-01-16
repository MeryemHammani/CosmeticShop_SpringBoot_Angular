import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlushItemComponent } from './add-flush-item.component';

describe('AddFlushItemComponent', () => {
  let component: AddFlushItemComponent;
  let fixture: ComponentFixture<AddFlushItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFlushItemComponent]
    });
    fixture = TestBed.createComponent(AddFlushItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
