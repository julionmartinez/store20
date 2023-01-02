import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { CreateShoppingCartRegister } from 'src/app/shared/interfaces/create-shopping-cart-register';
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
  
  private shoppingCart: CreateShoppingCartRegister =
  {
    dateAdd : new Date(),
    customerType: 'guest',
    total:0,
    totalProducts:0,
    statusCart:'create',
    email: null,
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
          console.log('orueba')
        })
        this.getListProductsBuyShoppingCart(idDataSC).subscribe(dataList=>{
          this.listProductsBuySC = dataList
          this.listProductsBuySCB.next(this.listProductsBuySC)
          this.shoppingCart.total = this.listProductsBuySC.reduce((prev, curr)=>prev + curr.total, 0)
          this.shoppingCart.totalProducts = this.listProductsBuySC.reduce((prev, curr)=> prev +curr.amount,0)
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
        return this.addProductShoppingCart(this.idShoppingCart, productBuy)
      })
      .catch(error=>{
        return null
      })
    } else {
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
    let testProduct : Boolean = this.listProductsBuySC.some(pro=> pro.idProduct == productBuy.idProduct)
      return this.afs.collection(this.nameColletionShoppingCart).doc(idSC).collection<ProductsBuy>(this.nameColletionListProductsBuyShoppingCart).add(productBuy)

    // }
    
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

  totalCostShoppingCart(listProductsBuySC:ProductsBuy[]){
    let totalCost: number = listProductsBuySC.reduce((prev, curr)=>prev + curr.total, 0);

  }




}
