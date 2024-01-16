import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfferComponent } from './best-offer.component';

describe('BestOfferComponent', () => {
  let component: BestOfferComponent;
  let fixture: ComponentFixture<BestOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestOfferComponent]
    });
    fixture = TestBed.createComponent(BestOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
