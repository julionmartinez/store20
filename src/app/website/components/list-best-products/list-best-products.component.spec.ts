import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBestProductsComponent } from './list-best-products.component';

describe('ListBestProductsComponent', () => {
  let component: ListBestProductsComponent;
  let fixture: ComponentFixture<ListBestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBestProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
