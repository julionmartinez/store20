import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Categories } from 'src/app/shared/interfaces/categories';
import { ModelImage } from 'src/app/shared/interfaces/model-image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlImgHeroHome: ModelImage[] = [];
  urlImgPromoSimpleTop: ModelImage = {
    urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Foffer-carac.png?alt=media&token=6da1ca72-5286-4b5d-87ce-e0978cd73149',
    urlImgTablet:'',
    urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Ffirst-mobile.png?alt=media&token=e84fb501-46f7-41cf-9086-36a6ad9d545c',
    
  }

  urlPromoSimpleMain:ModelImage = {
    urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2F6msi.png?alt=media&token=3f809e57-7108-40fe-be4d-84f86087867a',
    urlImgTablet:'',
    urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo%3Dpromo5.png?alt=media&token=4d5e9d8f-78aa-4960-85b1-88282d35b889',
    
  }

  listCategories:Categories[] = []

  constructor(
    private productsService : ProductsService,
  ) {
    this.productsService.getCategoriesList().subscribe(category=>{
      this.listCategories = category.slice(0,4)
    })
   }

  ngOnInit(): void {
  }

}
