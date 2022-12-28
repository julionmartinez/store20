import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/interfaces/categories';

@Component({
  selector: 'app-cateries-show',
  templateUrl: './cateries-show.component.html',
  styleUrls: ['./cateries-show.component.scss']
})
export class CateriesShowComponent implements OnInit {
  @Input() categoriesList:Categories[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  clickCategory(){
    
  }

}
