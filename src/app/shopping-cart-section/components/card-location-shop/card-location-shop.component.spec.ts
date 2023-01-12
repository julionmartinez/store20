import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocationShopComponent } from './card-location-shop.component';

describe('CardLocationShopComponent', () => {
  let component: CardLocationShopComponent;
  let fixture: ComponentFixture<CardLocationShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLocationShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLocationShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
