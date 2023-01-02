import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderModel01Component } from './order-model01.component';

describe('OrderModel01Component', () => {
  let component: OrderModel01Component;
  let fixture: ComponentFixture<OrderModel01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderModel01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderModel01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
