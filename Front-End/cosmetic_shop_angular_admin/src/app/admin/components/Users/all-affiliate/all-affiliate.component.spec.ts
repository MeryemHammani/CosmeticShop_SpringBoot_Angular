import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAffiliateComponent } from './all-affiliate.component';

describe('AllAffiliateComponent', () => {
  let component: AllAffiliateComponent;
  let fixture: ComponentFixture<AllAffiliateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAffiliateComponent]
    });
    fixture = TestBed.createComponent(AllAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
