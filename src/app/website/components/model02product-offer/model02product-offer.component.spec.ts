import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Model02productOfferComponent } from './model02product-offer.component';

describe('Model02productOfferComponent', () => {
  let component: Model02productOfferComponent;
  let fixture: ComponentFixture<Model02productOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Model02productOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Model02productOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
