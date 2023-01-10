import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCartComponent } from './layout-cart.component';

describe('LayoutCartComponent', () => {
  let component: LayoutCartComponent;
  let fixture: ComponentFixture<LayoutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
