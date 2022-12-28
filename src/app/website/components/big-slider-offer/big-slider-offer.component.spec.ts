import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSliderOfferComponent } from './big-slider-offer.component';

describe('BigSliderOfferComponent', () => {
  let component: BigSliderOfferComponent;
  let fixture: ComponentFixture<BigSliderOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSliderOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSliderOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
