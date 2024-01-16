import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingOrdersComponent } from './processing-orders.component';

describe('ProcessingOrdersComponent', () => {
  let component: ProcessingOrdersComponent;
  let fixture: ComponentFixture<ProcessingOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessingOrdersComponent]
    });
    fixture = TestBed.createComponent(ProcessingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
