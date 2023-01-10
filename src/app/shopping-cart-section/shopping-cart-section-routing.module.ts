import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCartComponent } from './components/layout-cart/layout-cart.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:':id',
    component:LayoutCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartSectionRoutingModule { }
