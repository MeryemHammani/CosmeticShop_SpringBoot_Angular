import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEditComponent } from './account-edit.component';

describe('AccountEditComponent', () => {
  let component: AccountEditComponent;
  let fixture: ComponentFixture<AccountEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountEditComponent]
    });
    fixture = TestBed.createComponent(AccountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
