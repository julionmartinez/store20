import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private nameColletionsProducts = 'productsList';
  private nameColletionsCategories = 'CategoriesList'

  constructor(
    private afs : AngularFirestore,
  ) { }


  getProductsFav(){
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
}
