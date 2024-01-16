import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSliderComponent } from './all-slider.component';

describe('AllSliderComponent', () => {
  let component: AllSliderComponent;
  let fixture: ComponentFixture<AllSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllSliderComponent]
    });
    fixture = TestBed.createComponent(AllSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
