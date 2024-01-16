import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReviewsComponent } from './pending-reviews.component';

describe('PendingReviewsComponent', () => {
  let component: PendingReviewsComponent;
  let fixture: ComponentFixture<PendingReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingReviewsComponent]
    });
    fixture = TestBed.createComponent(PendingReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
