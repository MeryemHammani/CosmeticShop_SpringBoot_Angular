import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlSliderComponent } from './al-slider.component';

describe('AlSliderComponent', () => {
  let component: AlSliderComponent;
  let fixture: ComponentFixture<AlSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlSliderComponent]
    });
    fixture = TestBed.createComponent(AlSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
