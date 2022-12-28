import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoOfferComponent } from './two-offer.component';

describe('TwoOfferComponent', () => {
  let component: TwoOfferComponent;
  let fixture: ComponentFixture<TwoOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
