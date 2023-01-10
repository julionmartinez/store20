import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelProduct03ShoppingCartComponent } from './model-product03-shopping-cart.component';

describe('ModelProduct03ShoppingCartComponent', () => {
  let component: ModelProduct03ShoppingCartComponent;
  let fixture: ComponentFixture<ModelProduct03ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelProduct03ShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelProduct03ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
