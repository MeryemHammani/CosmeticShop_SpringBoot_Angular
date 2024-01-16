import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivredOrdersComponent } from './delivred-orders.component';

describe('DelivredOrdersComponent', () => {
  let component: DelivredOrdersComponent;
  let fixture: ComponentFixture<DelivredOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelivredOrdersComponent]
    });
    fixture = TestBed.createComponent(DelivredOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
