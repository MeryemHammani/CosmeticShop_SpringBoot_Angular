import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSliderComponent } from './edit-slider.component';

describe('EditSliderComponent', () => {
  let component: EditSliderComponent;
  let fixture: ComponentFixture<EditSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSliderComponent]
    });
    fixture = TestBed.createComponent(EditSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
