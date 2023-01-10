import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./website/website.module').then(m=>m.WebsiteModule),
  },
  {
    path:'user',
    loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule),
  },
  {
    path:'shoppingCart',
    loadChildren:()=>import('./shopping-cart-section/shopping-cart-section.module').then(m=>m.ShoppingCartSectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
