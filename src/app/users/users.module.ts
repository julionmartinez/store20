import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { MyAccountComponent } from '../users/pages/my-account/my-account.component';
import { MyShoppingCartComponent } from './pages/my-shopping-cart/my-shopping-cart.component';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessCreateAccountComponent } from './pages/success-create-account/success-create-account.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderModel01Component } from './components/order-model01/order-model01.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';



@NgModule({
  declarations: [
    LoginComponent,
    MyListComponent,
    MyAccountComponent,
    MyShoppingCartComponent,
    LayoutUserComponent,
    SuccessCreateAccountComponent,
    ShoppingCartComponent,
    OrderModel01Component,
    ListOrdersComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
