import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlushItemComponent } from './all-flush-item.component';

describe('AllFlushItemComponent', () => {
  let component: AllFlushItemComponent;
  let fixture: ComponentFixture<AllFlushItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFlushItemComponent]
    });
    fixture = TestBed.createComponent(AllFlushItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
