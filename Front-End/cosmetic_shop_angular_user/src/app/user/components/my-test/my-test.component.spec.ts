import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponent } from './my-test.component';

describe('MyTestComponent', () => {
  let component: MyTestComponent;
  let fixture: ComponentFixture<MyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTestComponent]
    });
    fixture = TestBed.createComponent(MyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
