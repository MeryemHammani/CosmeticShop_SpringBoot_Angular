import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDashbordComponent } from './account-dashbord.component';

describe('AccountDashbordComponent', () => {
  let component: AccountDashbordComponent;
  let fixture: ComponentFixture<AccountDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountDashbordComponent]
    });
    fixture = TestBed.createComponent(AccountDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
