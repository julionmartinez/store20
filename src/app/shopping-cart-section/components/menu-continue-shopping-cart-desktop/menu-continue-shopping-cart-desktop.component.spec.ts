import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContinueShoppingCartDesktopComponent } from './menu-continue-shopping-cart-desktop.component';

describe('MenuContinueShoppingCartDesktopComponent', () => {
  let component: MenuContinueShoppingCartDesktopComponent;
  let fixture: ComponentFixture<MenuContinueShoppingCartDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuContinueShoppingCartDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuContinueShoppingCartDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
