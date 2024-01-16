import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBrandComponent } from './all-brand.component';

describe('AllBrandComponent', () => {
  let component: AllBrandComponent;
  let fixture: ComponentFixture<AllBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBrandComponent]
    });
    fixture = TestBed.createComponent(AllBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
