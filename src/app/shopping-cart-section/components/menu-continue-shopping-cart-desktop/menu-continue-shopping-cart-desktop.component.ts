import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';


@Component({
  selector: 'app-menu-continue-shopping-cart-desktop',
  templateUrl: './menu-continue-shopping-cart-desktop.component.html',
  styleUrls: ['./menu-continue-shopping-cart-desktop.component.scss']
})
export class MenuContinueShoppingCartDesktopComponent implements OnInit {

  shoppingCart : ShoppingCart | undefined = undefined;
  @Input() set _shoppingCart(sc:ShoppingCart| undefined){
    if(sc != undefined){
      this.shoppingCart = sc
    }
  }

  @Output() continuebtn = new EventEmitter()
  constructor(
   
  ) { }

  ngOnInit(): void {
  }

  clickContinue(){
    return this.continuebtn.emit()
  }
  

}
