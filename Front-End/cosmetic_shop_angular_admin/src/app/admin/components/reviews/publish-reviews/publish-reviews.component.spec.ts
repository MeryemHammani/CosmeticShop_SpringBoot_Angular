import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishReviewsComponent } from './publish-reviews.component';

describe('PublishReviewsComponent', () => {
  let component: PublishReviewsComponent;
  let fixture: ComponentFixture<PublishReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishReviewsComponent]
    });
    fixture = TestBed.createComponent(PublishReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
