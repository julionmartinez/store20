import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-list-best-products',
  templateUrl: './list-best-products.component.html',
  styleUrls: ['./list-best-products.component.scss']
})
export class ListBestProductsComponent implements OnInit {

  productList:ProductsGral[] = [];

  constructor(
    private productsServices:ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsServices.getProductsFav().subscribe(products=>{
      this.productList = products.slice(6,10)
    })
  }

}
