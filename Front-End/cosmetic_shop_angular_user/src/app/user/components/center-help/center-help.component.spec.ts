import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterHelpComponent } from './center-help.component';

describe('CenterHelpComponent', () => {
  let component: CenterHelpComponent;
  let fixture: ComponentFixture<CenterHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterHelpComponent]
    });
    fixture = TestBed.createComponent(CenterHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
