import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCouponComponent } from './all-coupon.component';

describe('AllCouponComponent', () => {
  let component: AllCouponComponent;
  let fixture: ComponentFixture<AllCouponComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCouponComponent]
    });
    fixture = TestBed.createComponent(AllCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
