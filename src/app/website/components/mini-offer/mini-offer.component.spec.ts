import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniOfferComponent } from './mini-offer.component';

describe('MiniOfferComponent', () => {
  let component: MiniOfferComponent;
  let fixture: ComponentFixture<MiniOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
