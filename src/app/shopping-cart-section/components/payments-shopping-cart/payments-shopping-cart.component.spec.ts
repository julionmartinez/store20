import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsShoppingCartComponent } from './payments-shopping-cart.component';

describe('PaymentsShoppingCartComponent', () => {
  let component: PaymentsShoppingCartComponent;
  let fixture: ComponentFixture<PaymentsShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
