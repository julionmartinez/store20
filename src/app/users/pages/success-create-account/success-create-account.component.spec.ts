import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCreateAccountComponent } from './success-create-account.component';

describe('SuccessCreateAccountComponent', () => {
  let component: SuccessCreateAccountComponent;
  let fixture: ComponentFixture<SuccessCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessCreateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
