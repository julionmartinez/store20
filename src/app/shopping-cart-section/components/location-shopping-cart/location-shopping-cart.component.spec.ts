import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationShoppingCartComponent } from './location-shopping-cart.component';

describe('LocationShoppingCartComponent', () => {
  let component: LocationShoppingCartComponent;
  let fixture: ComponentFixture<LocationShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
