import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-model02product-offer',
  templateUrl: './model02product-offer.component.html',
  styleUrls: ['./model02product-offer.component.scss']
})
export class Model02productOfferComponent implements OnInit {

  @Input() productBuy: ProductsBuy | null = null;
  idProduct: string | null | undefined = null;

  constructor(
    private shoppingCartService : ShoppingCartService,
  ) { }

  ngOnInit(): void {
  }

  addProduct(){
    if(this.productBuy?.amount! == 0){
      this.productBuy = {
        product : this.productBuy?.product!,
        idProduct: this.productBuy?.idProduct!,
        priceIndividual: this.productBuy?.priceIndividual! ,
        amount:  1,
        total: 1 * this.productBuy?.priceIndividual! ,
      } 
      this.shoppingCartService.checkShoppingCart(this.productBuy!, null).then(result=>{
        this.idProduct = result?.id
      })
    } else {
      this.productBuy = {
        product : this.productBuy?.product!,
        idProduct: this.productBuy?.idProduct!,
        priceIndividual: this.productBuy?.priceIndividual! ,
        amount:  this.productBuy?.amount! + 1,
        total: (this.productBuy?.amount! + 1) * this.productBuy?.priceIndividual! ,
      } 
      this.shoppingCartService.checkShoppingCart(this.productBuy!, this.idProduct!).then(result=>{
      
      })
    }

 
  }

  removeProduct(){
    if(this.productBuy?.amount! != 0){
      this.productBuy = {
        product : this.productBuy?.product!,
        idProduct: this.productBuy?.idProduct!,
        priceIndividual: this.productBuy?.priceIndividual! ,
        amount:  this.productBuy?.amount! - 1,
        total: (this.productBuy?.amount! - 1) * this.productBuy?.priceIndividual! ,
      } 
      this.shoppingCartService.checkShoppingCart(this.productBuy!, this.idProduct!).then(result=>{
      
      })
    } else {
      

    }
  }


}
