import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { CreateShoppingCartRegister } from 'src/app/shared/interfaces/create-shopping-cart-register';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  obsUSer : Subscription | null = null;
  user: User | null = null;

  obsSC : Subscription | null = null;
  shoppingCart: CreateShoppingCartRegister | null = null;

  constructor(
    private authServices : AuthService,
    private shoppingCartServices : ShoppingCartService,
    ) {
      this.obsSC = this.shoppingCartServices.shoppingCart$.subscribe(data=>{
        this.shoppingCart = data
      });
      

    
    
   }

  ngOnInit(): void {

    this.obsUSer = this.authServices.userb$.subscribe(dataUser=>{
      this.user = dataUser
      console.log(this.user,'55')
    })
  }

  ngOnDestroy(): void {
    this.obsUSer?.unsubscribe()
    this.obsSC?.unsubscribe()
  }


  
  



}
