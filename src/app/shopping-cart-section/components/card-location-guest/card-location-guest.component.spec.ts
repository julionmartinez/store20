import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocationGuestComponent } from './card-location-guest.component';

describe('CardLocationGuestComponent', () => {
  let component: CardLocationGuestComponent;
  let fixture: ComponentFixture<CardLocationGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLocationGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLocationGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
