import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedOrdersComponent } from './confirmed-orders.component';

describe('ConfirmedOrdersComponent', () => {
  let component: ConfirmedOrdersComponent;
  let fixture: ComponentFixture<ConfirmedOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedOrdersComponent]
    });
    fixture = TestBed.createComponent(ConfirmedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
