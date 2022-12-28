import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { Model01productComponent } from './components/model01product/model01product.component';
import { ListFavProductsComponent } from './components/list-fav-products/list-fav-products.component';
import { ListBestProductsComponent } from './components/list-best-products/list-best-products.component';
import { Model02productOfferComponent } from './components/model02product-offer/model02product-offer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BigSliderOfferComponent } from './components/big-slider-offer/big-slider-offer.component';
import { SimpleOfferComponent } from './components/simple-offer/simple-offer.component';
import { TwoOfferComponent } from './components/two-offer/two-offer.component';
import { MiniOfferComponent } from './components/mini-offer/mini-offer.component';
import { CateriesShowComponent } from './components/cateries-show/cateries-show.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    Model01productComponent,
    ListFavProductsComponent,
    ListBestProductsComponent,
    Model02productOfferComponent,
    FooterComponent,
    ToolbarComponent,
    BigSliderOfferComponent,
    SimpleOfferComponent,
    TwoOfferComponent,
    MiniOfferComponent,
    CateriesShowComponent,
    CategoriesComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule
  ]
})
export class WebsiteModule { }
