import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductComponent } from './all-product.component';

describe('AllProductComponent', () => {
  let component: AllProductComponent;
  let fixture: ComponentFixture<AllProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProductComponent]
    });
    fixture = TestBed.createComponent(AllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
