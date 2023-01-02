import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-list-best-products',
  templateUrl: './list-best-products.component.html',
  styleUrls: ['./list-best-products.component.scss']
})
export class ListBestProductsComponent implements OnInit {

  productList:ProductsBuy[] = [];

  constructor(
    private productsServices:ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsServices.getProductsFav().subscribe(products=>{
      this.productList = this.productsServices.convertProductGralToProductBuy(products.slice(0,6))
    })
  }

}
