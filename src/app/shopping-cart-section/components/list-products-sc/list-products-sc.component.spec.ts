import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsScComponent } from './list-products-sc.component';

describe('ListProductsScComponent', () => {
  let component: ListProductsScComponent;
  let fixture: ComponentFixture<ListProductsScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
