import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/shared/interfaces/categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  subscritionCategories: Subscription | null = null;
  listCategories: Categories[] = [];
  constructor(
    private productServices : ProductsService,
  ) {    
    

   }

  ngOnInit(): void {

    this.subscritionCategories = this.productServices.getCategoriesList().subscribe(categoryList=>{
      this.listCategories = categoryList
    })
    
  }
  ngOnDestroy(): void {
    this.subscritionCategories?.unsubscribe()
  }

}
