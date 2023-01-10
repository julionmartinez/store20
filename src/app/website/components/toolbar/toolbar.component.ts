import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private router : Router,
    private _snackBar : MatSnackBar,
    ) {
      this.obsSC = this.shoppingCartServices.shoppingCart$.subscribe(data=>{
        this.shoppingCart = data
      });
      

    
    
   }

  ngOnInit(): void {

    this.obsUSer = this.authServices.userb$.subscribe(dataUser=>{
      this.user = dataUser;
    })
  }

  ngOnDestroy(): void {
    this.obsUSer?.unsubscribe()
    this.obsSC?.unsubscribe()
  }

  goShoppingCart(){
    
    if(this.shoppingCart?.totalProducts == 0){
      this.openSnackBar('Ups, aun no agregas nada al carrito, agrega tus dulces favoritos', 5)
    } else {
      this.shoppingCartServices.saveShoppingCart().then(result=>{
        this.router.navigate([`shoppingCart/${this.shoppingCart?.id}`])
      })
      .catch(error=>{
        this.openSnackBar('😥 Ups!, Hubo un error, vulve a intentarlo', 4)
      })
     
      
    }
  }
  openSnackBar(message:string, time:number){
    this._snackBar.open(message, 'Ok', {
      duration: 1000 * time
    })
  }


  
  



}
