import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartSectionRoutingModule } from './shopping-cart-section-routing.module';
import { LayoutCartComponent } from './components/layout-cart/layout-cart.component';
import { ProductsComponent } from './pages/products/products.component';

import { MaterialModule } from '../shared/material/material.module';
import { ListProductsScComponent } from './components/list-products-sc/list-products-sc.component';
import { LocationShoppingCartComponent } from './components/location-shopping-cart/location-shopping-cart.component';
import { PaymentsShoppingCartComponent } from './components/payments-shopping-cart/payments-shopping-cart.component';
import { ModelProduct03ShoppingCartComponent } from './components/model-product03-shopping-cart/model-product03-shopping-cart.component';
import { MenuContinueShoppingCartComponent } from './components/menu-continue-shopping-cart/menu-continue-shopping-cart.component';
import { MenuContinueShoppingCartDesktopComponent } from './components/menu-continue-shopping-cart-desktop/menu-continue-shopping-cart-desktop.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { CardLocationComponent } from './components/card-location/card-location.component';
import { AddLocationComponent } from './components/dialog/add-location/add-location.component';


@NgModule({
  declarations: [
    LayoutCartComponent,
    ProductsComponent,
    ListProductsScComponent,
    LocationShoppingCartComponent,
    PaymentsShoppingCartComponent,
    ModelProduct03ShoppingCartComponent,
    MenuContinueShoppingCartComponent,
    MenuContinueShoppingCartDesktopComponent,
    CardLocationComponent,
    AddLocationComponent,
    
  ],
  imports: [
    CommonModule,
    ShoppingCartSectionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ShoppingCartSectionModule { }
