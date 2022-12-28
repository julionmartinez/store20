import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavProductsComponent } from './list-fav-products.component';

describe('ListFavProductsComponent', () => {
  let component: ListFavProductsComponent;
  let fixture: ComponentFixture<ListFavProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFavProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
