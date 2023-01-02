import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/shared/interfaces/categories';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  idCategory:string | null = null;
  category:Categories | null = null;

  listProducts: ProductsBuy[] = []


  constructor(
    private activatedRouter : ActivatedRoute,
    private productServices : ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params=>{
      this.idCategory = params.get('id')
    })

    if(this.idCategory != null){
      this.productServices.getCategory(this.idCategory).subscribe(categoryObs=>{
        this.category = categoryObs!
      })

      this.productServices.getProductListOfCategory(this.idCategory).subscribe(productList=>{
        this.listProducts = this.productServices.convertProductGralToProductBuy(productList)
      })
      

    }
    
  }

}
