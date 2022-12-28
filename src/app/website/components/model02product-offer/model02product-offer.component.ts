import { Component, Input, OnInit } from '@angular/core';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-model02product-offer',
  templateUrl: './model02product-offer.component.html',
  styleUrls: ['./model02product-offer.component.scss']
})
export class Model02productOfferComponent implements OnInit {

  @Input() product:ProductsGral | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
