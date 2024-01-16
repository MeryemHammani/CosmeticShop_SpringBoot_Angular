import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlushComponent } from './all-flush.component';

describe('AllFlushComponent', () => {
  let component: AllFlushComponent;
  let fixture: ComponentFixture<AllFlushComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFlushComponent]
    });
    fixture = TestBed.createComponent(AllFlushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
