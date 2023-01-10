import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';

@Component({
  selector: 'app-menu-continue-shopping-cart-desktop',
  templateUrl: './menu-continue-shopping-cart-desktop.component.html',
  styleUrls: ['./menu-continue-shopping-cart-desktop.component.scss']
})
export class MenuContinueShoppingCartDesktopComponent implements OnInit {

  shoppingCart : ShoppingCart | null = null;
  @Input() set idShoppingCart(id:string | null){
    if(id!= null){
      this.shoppingCartServices.getShoppingCart(id).subscribe(data=>{
        this.shoppingCart = data!
        console.log(this.shoppingCart)
      })
    }
  }
  constructor(
    private shoppingCartServices : ShoppingCartService,
  ) { }

  ngOnInit(): void {
  }
  

}
