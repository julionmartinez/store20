import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LayoutUserComponent } from './components/layout-user/layout-user.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { SuccessCreateAccountComponent } from './pages/success-create-account/success-create-account.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutUserComponent,
    children:[
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'a',
        canActivate:[AuthGuard],
        children:[
          {
            path:'my-account',
            component:MyAccountComponent
          },
          {
            path:'success-create-account',
            component:SuccessCreateAccountComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
