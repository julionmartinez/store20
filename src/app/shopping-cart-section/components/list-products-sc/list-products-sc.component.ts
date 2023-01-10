import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { ProductsBuy } from 'src/app/shared/interfaces/products-buy';

@Component({
  selector: 'app-list-products-sc',
  templateUrl: './list-products-sc.component.html',
  styleUrls: ['./list-products-sc.component.scss']
})
export class ListProductsScComponent implements OnInit {

  @Input() listProductBuy : ProductsBuy[] = [];


  

  constructor(
    private shoppingCartServices : ShoppingCartService,
  ) { }

  ngOnInit(): void {
  }

}
