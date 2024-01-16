import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDasbordComponent } from './user-dasbord.component';

describe('UserDasbordComponent', () => {
  let component: UserDasbordComponent;
  let fixture: ComponentFixture<UserDasbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDasbordComponent]
    });
    fixture = TestBed.createComponent(UserDasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
