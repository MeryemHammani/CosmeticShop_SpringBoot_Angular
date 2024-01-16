import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPasswordComponent } from './account-password.component';

describe('AccountPasswordComponent', () => {
  let component: AccountPasswordComponent;
  let fixture: ComponentFixture<AccountPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPasswordComponent]
    });
    fixture = TestBed.createComponent(AccountPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
