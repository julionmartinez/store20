import { Component, Input, OnInit } from '@angular/core';
import { ProductsGral } from 'src/app/shared/interfaces/products-gral';

@Component({
  selector: 'app-model01product',
  templateUrl: './model01product.component.html',
  styleUrls: ['./model01product.component.scss']
})
export class Model01productComponent implements OnInit {

  @Input() product : ProductsGral | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
