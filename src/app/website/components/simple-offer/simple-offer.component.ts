import { Component, Input, OnInit } from '@angular/core';
import { ModelImage } from 'src/app/shared/interfaces/model-image';

@Component({
  selector: 'app-simple-offer',
  templateUrl: './simple-offer.component.html',
  styleUrls: ['./simple-offer.component.scss']
})
export class SimpleOfferComponent implements OnInit {

  @Input() urlImg :ModelImage | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
