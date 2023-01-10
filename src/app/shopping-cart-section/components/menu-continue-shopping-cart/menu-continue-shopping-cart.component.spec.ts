import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContinueShoppingCartComponent } from './menu-continue-shopping-cart.component';

describe('MenuContinueShoppingCartComponent', () => {
  let component: MenuContinueShoppingCartComponent;
  let fixture: ComponentFixture<MenuContinueShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContinueShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuContinueShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
