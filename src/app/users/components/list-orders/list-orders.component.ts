import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  listShoppongCart: ShoppingCart[] = [];
  constructor(
    private accountService : AccountService,
  ) { }

  ngOnInit(): void {

    this.accountService.getShoppingCart().subscribe(shopp=>{
      this.listShoppongCart = shopp.slice(0,6)!
      console.log(this.listShoppongCart)

    })
  }

}
