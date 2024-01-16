import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductComponent } from './stock-product.component';

describe('StockProductComponent', () => {
  let component: StockProductComponent;
  let fixture: ComponentFixture<StockProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockProductComponent]
    });
    fixture = TestBed.createComponent(StockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
