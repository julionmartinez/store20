import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOfferComponent } from './simple-offer.component';

describe('SimpleOfferComponent', () => {
  let component: SimpleOfferComponent;
  let fixture: ComponentFixture<SimpleOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
