import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';
import { User } from 'src/app/shared/interfaces/user';


@Component({
  selector: 'app-layout-cart',
  templateUrl: './layout-cart.component.html',
  styleUrls: ['./layout-cart.component.scss']
})
export class LayoutCartComponent implements OnInit {
  idShoppingCart : string | null = null;
  shoppingCart : ShoppingCart | undefined = undefined;

  listProductsShoppingCart:ProductsBuy[] = [];

  user: User | null = null;
  positionShoppingCart: 'listProducts' | 'location' | 'payments' = 'payments';

  constructor(
    private shoppinCartServices: ShoppingCartService,
    private activatedRouter : ActivatedRoute,
    private userService : AuthService,
  ) {
    this.activatedRouter.paramMap.subscribe(params=>{
      if (params != null){
        this.idShoppingCart = params.get('id')
      }else{

      }
      
    })
   }

  ngOnInit(): void {

    if (this.idShoppingCart != null){
      this.shoppinCartServices.getShoppingCart(this.idShoppingCart).subscribe(data=>{
        this.shoppingCart = data!
      });

      this.shoppinCartServices.getListProductsBuyShoppingCart(this.idShoppingCart).subscribe(data=>{
        this.listProductsShoppingCart = data
        let shoppingCartTemporal = this.shoppinCartServices.calculateAndUpdateShoppingCart(this.listProductsShoppingCart, this.shoppingCart!)
        this.shoppinCartServices.updateShoppingCart(this.idShoppingCart!, this.shoppingCart!)
      }) 
    }

    this.userService.userb$.subscribe(data=>{
      this.user = data
    })
  }
  clickIconBtn(btnType:'listProducts' | 'location' | 'payments'){
    this.positionShoppingCart = btnType
  }

  updateShoppingCart(cart:ShoppingCart){
    if(this.idShoppingCart != null){
      this.shoppinCartServices.updateShoppingCart(this.idShoppingCart,cart)
    }
  }

  continueTabPosition(){
    switch (this.positionShoppingCart){
      case 'listProducts':
        this.positionShoppingCart = 'location';
        break;
      case 'location':
        this.positionShoppingCart = 'payments';
        break;
      case 'payments':
        console.log(this.shoppingCart, 'ir a pagina de pagos')

    }

  }

}
