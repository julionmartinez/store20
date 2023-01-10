import { Component, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';

@Component({
  selector: 'app-model-product03-shopping-cart',
  templateUrl: './model-product03-shopping-cart.component.html',
  styleUrls: ['./model-product03-shopping-cart.component.scss']
})
export class ModelProduct03ShoppingCartComponent implements OnInit {


  @Input() productBuy:ProductsBuy  = {
   
    priceIndividual:0,
    amount:0,
    total:0,
    dateAdd: null,
    position:null,
  };


  
 
  constructor(
    private shoppingCartService : ShoppingCartService,

  ) { 

  }

  ngOnInit(): void {
  }

  addProduct(){
    let amount : number = this.productBuy.amount + 1
    let total : number = amount * this.productBuy.priceIndividual
    this.productBuy.amount  = amount
    this.productBuy.total = total
    this.shoppingCartService.updateProductBuy(this.productBuy?.idShoppingCart!, this.productBuy?.id!, this.productBuy!).then(result=>{
      // this.shoppingCartService.calculateAndUpdateShoppingCart(aaafeeeeeeeeeeeeeeeeeez)
    })
  }

  removeProduct(){
    if(this.productBuy.amount > 1){
      let amount : number = this.productBuy.amount - 1
      let total : number = amount * this.productBuy.priceIndividual
      this.productBuy.amount  = amount
      this.productBuy.total = total
      this.shoppingCartService.updateProductBuy(this.productBuy?.idShoppingCart!, this.productBuy?.id!, this.productBuy!).then(result=>{
      })
      .catch(error=>{

      })
    } else {

      this.shoppingCartService.deleteProductShoppingCart(this.productBuy.idShoppingCart!, this.productBuy.id!)

    }
  }


}
