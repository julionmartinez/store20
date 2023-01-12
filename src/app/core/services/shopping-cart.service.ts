import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { CreateShoppingCartRegister } from 'src/app/shared/interfaces/create-shopping-cart-register';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { MakeShoppingCart } from 'src/app/shared/interfaces/make-shopping-cart';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';
import { User } from 'src/app/shared/interfaces/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private nameColletionShoppingCart:string = 'listShoppingCart01'
  private nameColletionListProductsBuyShoppingCart = 'listProductsBuyShoppingCart'
  
  private shoppingCart: CreateShoppingCartRegister | ShoppingCart =
  {
    dateAdd : new Date(),
    customerType: 'guest',
    total:0,
    totalProducts:0,
    statusCart:'create',
    email: null,
    costDelivery:0,
    subtotal:0,
  };
  private shoppingCartB = new BehaviorSubject<CreateShoppingCartRegister>(this.shoppingCart);
  shoppingCart$ = this.shoppingCartB.asObservable();

  private idShoppingCart : string | null = null;
  private idShoppingCartB = new BehaviorSubject<string | null>(null);
  idShoopingCart$ = this.idShoppingCartB.asObservable();
  
  private listProductsBuySC: ProductsBuy[] = []
  private listProductsBuySCB = new BehaviorSubject<ProductsBuy[]>(this.listProductsBuySC);
  listProductsBuySC$ = this.listProductsBuySCB.asObservable();

  


  private shoppingCartNew: CreateShoppingCartRegister = {
    dateAdd : new Date(),
    customerType: 'guest',
    total:0,
    totalProducts:0,
    statusCart:'create',
    email: null,
    subtotal:0,
    costDelivery:0,
  }

  private user : User | null = null;



  constructor(
    private authService: AuthService,
    private afs : AngularFirestore,
  
  ) { 
    this.authService.userb$.subscribe(dataUser=>{
      this.user = dataUser
      if(this.user != null){
        this.shoppingCartNew.email = this.user?.email
        this.shoppingCartNew.customerType = 'register'
      }
    })
    this.idShoopingCart$.subscribe(idDataSC=>{
      if(idDataSC != null){
        this.getShoppingCart(idDataSC).subscribe(dataSC=>{
          this.shoppingCart = dataSC!
        })
        this.getListProductsBuyShoppingCart(idDataSC).subscribe(dataList=>{
          this.listProductsBuySC = dataList
          this.listProductsBuySCB.next(this.listProductsBuySC)
          this.shoppingCart.subtotal = this.makeShoppingCart(this.listProductsBuySC,this.shoppingCart).subtotal
          this.shoppingCart.totalProducts =  this.makeShoppingCart(this.listProductsBuySC, this.shoppingCart).totalProducts
          this.shoppingCart.total = this.makeShoppingCart(this.listProductsBuySC, this.shoppingCart).total
          this.shoppingCartB.next(this.shoppingCart)
        })
      }
    })
  }

  async checkShoppingCart(productBuy:ProductsBuy, idProduct : string | null){ 
    if(this.idShoppingCart == null){
      return await this.createShoppingCart().then(result=>{
        this.idShoppingCart = result.id
        this.idShoppingCartB.next(this.idShoppingCart)
        productBuy.idShoppingCart = this.idShoppingCart
        return this.addProductShoppingCart(this.idShoppingCart, productBuy)
      })
      .catch(error=>{
        return null
      })
    } else {
      productBuy.idShoppingCart = this.idShoppingCart
      return this.testProduct(this.idShoppingCart, idProduct, productBuy)
    }
  }

  testProduct(idSC:string, idProducBuy:string | null, productBuy:ProductsBuy){
    let testProduct : Boolean = this.listProductsBuySC.some(pro=> pro.idProduct == productBuy.idProduct)
    if (testProduct){
      return this.updateProductBuy(idSC, idProducBuy!, productBuy)
    } else {
      return this.addProductShoppingCart(idSC, productBuy)
    }
  }


  

  addProductShoppingCart(idSC:string, productBuy:ProductsBuy){
      return this.afs.collection(this.nameColletionShoppingCart).doc(idSC).collection<ProductsBuy>(this.nameColletionListProductsBuyShoppingCart).add(productBuy)
  }

  updateProductBuy(idSC:string, idProducBuy:string, productBuy:ProductsBuy){
    return this.afs.collection(this.nameColletionShoppingCart).doc(idSC).collection<ProductsBuy>(this.nameColletionListProductsBuyShoppingCart).doc(idProducBuy).update(productBuy)
  }

 createShoppingCart(){
  return this.afs.collection(this.nameColletionShoppingCart).add(this.shoppingCartNew)
 }

  getShoppingCart(idSC:string){
    return this.afs.collection<ShoppingCart>(this.nameColletionShoppingCart).doc(idSC).valueChanges({idField:'id'})
  }

  getProductBuy(idShoppingCart:string, idProducBuy:string){
      return this.afs.collection(this.nameColletionShoppingCart).doc(idShoppingCart).collection<ProductsBuy>(this.nameColletionListProductsBuyShoppingCart).doc(idProducBuy).valueChanges({idField:'id'})
    
  }

  getListProductsBuyShoppingCart(idSC:string){
    return this.afs.collection(this.nameColletionShoppingCart).doc(idSC).collection<ProductsBuy>(this.nameColletionListProductsBuyShoppingCart).valueChanges({idField:'id'})
  }

  updateShoppingCart(idSC:string, shoppingCart:ShoppingCart){
    return this.afs.collection(this.nameColletionShoppingCart).doc(idSC).update(shoppingCart)
  }
  saveShoppingCart(){
    return this.afs.collection(this.nameColletionShoppingCart).doc(this.idShoppingCart!).update(this.shoppingCart)
  }

  makeShoppingCart(listProductsBuy: ProductsBuy[], shoppingCart:CreateShoppingCartRegister){
    let totalProducts: number = listProductsBuy.reduce((prev, curr)=>prev + curr.amount, 0);
    let subtotal: number = listProductsBuy.reduce((prev, curr)=>prev + curr.total, 0);
    let costDelivery: number = this.shoppingCart.costDelivery
    let shopping: MakeShoppingCart = {
      totalProducts: totalProducts ,
      subtotal:subtotal ,
      costDelivery: shoppingCart.costDelivery,
      total: subtotal + costDelivery ,
    }
    return shopping
  }

  deleteProductShoppingCart(idSC:string, idProductBuy:string){
this.afs.collection(this.nameColletionShoppingCart).doc(idSC).collection(this.nameColletionListProductsBuyShoppingCart).doc(idProductBuy).delete()
  }

  calculateAndUpdateShoppingCart(listProductsBuy:ProductsBuy[], shoppingCart:ShoppingCart, ){
    let subTotal:number =  listProductsBuy.reduce((prev, curr)=> prev + curr.total, 0 );
    let totalProducts:number = listProductsBuy.reduce((prev, curr)=> prev +curr.amount,0)
    
    shoppingCart.subtotal = subTotal;
    shoppingCart.totalProducts =  totalProducts;
    shoppingCart.total = subTotal + shoppingCart.costDelivery;
    return shoppingCart
  }

  // fixedShoppingCart(idShoppingCart:string){
  //   this.getShoppingCart(idShoppingCart).subscribe(dataSC=>{
  //     if(dataSC != undefined){
  //       this.shoppingCart = dataSC
  //     }
  //   })
  // }

}
