import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';

@Component({
  selector: 'app-order-model01',
  templateUrl: './order-model01.component.html',
  styleUrls: ['./order-model01.component.scss']
})
export class OrderModel01Component implements OnInit {

  @Input() shoppingCart: ShoppingCart | null = null

  constructor() { }

  ngOnInit(): void {
    
  }

}
