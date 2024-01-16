import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistProdsComponent } from './wishlist-prods.component';

describe('WishlistProdsComponent', () => {
  let component: WishlistProdsComponent;
  let fixture: ComponentFixture<WishlistProdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistProdsComponent]
    });
    fixture = TestBed.createComponent(WishlistProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
