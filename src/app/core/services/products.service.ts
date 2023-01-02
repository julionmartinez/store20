import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private nameColletionsProducts = 'productsList';
  private nameColletionsCategories = 'CategoriesList';

  private listProductShoppingCart: ProductsBuy[] = [];


  constructor(
    private afs : AngularFirestore,
    private shoppingCartServices : ShoppingCartService
  ) { 

    this.shoppingCartServices.listProductsBuySC$.subscribe(dataListShoppingCart=>{
      this.listProductShoppingCart = dataListShoppingCart
    })
  }


  getProductsFav(){
    return this.afs.collection<ProductsGral>(this.nameColletionsProducts, ref=> ref.where('bestSeller', '==', 'yes')).valueChanges({idField:'id'})
  }

  getProductsOffers(){
    return this.afs.collection<ProductsGral>(this.nameColletionsProducts, ref=> ref.where('bestSeller', '==', 'yes')).valueChanges({idField:'id'})
  }

  getCategoriesList(){
    return this.afs.collection<Categories>(this.nameColletionsCategories).valueChanges({idField:'id'})
  }
  getCategory(idCategory:string){
    return this.afs.collection<Categories>(this.nameColletionsCategories).doc(idCategory).valueChanges({idField:'id'})
  }

  getProductListOfCategory(idCategory:string){
    return this.afs.collection<ProductsGral>(this.nameColletionsProducts, ref=> ref.where('category', '==', idCategory)).valueChanges({idField:'id'})
  }

  convertProductGralToProductBuy(listProductGral:ProductsGral[]){
    let listProductBuy: ProductsBuy[] = [];
    listProductGral.forEach(product=>{
      let testFind = this.listProductShoppingCart.some(pro=> pro.idProduct == product.id)
      if(testFind){
        let productBuyRi: ProductsBuy = this.listProductShoppingCart.find(pro=> pro.idProduct == product.id)!
        listProductBuy.push(productBuyRi)
      }else{
        let productBuy :ProductsBuy = {
          idProduct:product.id!,
          product:product,
          priceIndividual:product.price,
          amount: 0,
          total:0,
        }
        listProductBuy.push(productBuy)
      }
    })
    return listProductBuy
  }



}
