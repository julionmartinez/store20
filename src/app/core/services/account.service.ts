import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

    private nameColletionShoppingCart = 'listShoppingCart';
    private nameColletionProductListSC = 'listProductShoppingCart';

  constructor(
    private afs : AngularFirestore


  ) { }

  getShoppingCart(){
    return this.afs.collection<ShoppingCart>(this.nameColletionShoppingCart, ref=> ref.where('dateAdd', '!=' , null ) ).valueChanges({idField:'id'})
  }
}
