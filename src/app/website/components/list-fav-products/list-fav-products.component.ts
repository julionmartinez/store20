import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-list-fav-products',
  templateUrl: './list-fav-products.component.html',
  styleUrls: ['./list-fav-products.component.scss']
})
export class ListFavProductsComponent implements OnInit {


  productList:ProductsGral[] = [];
  constructor(
    private productsServices:ProductsService,
  ) {
   }

  ngOnInit(): void {
    this.productsServices.getProductsFav().subscribe(products=>{
      this.productList = products.slice(0,6)
    })
  }

}
