import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdreviewsComponent } from './prodreviews.component';

describe('ProdreviewsComponent', () => {
  let component: ProdreviewsComponent;
  let fixture: ComponentFixture<ProdreviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdreviewsComponent]
    });
    fixture = TestBed.createComponent(ProdreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
