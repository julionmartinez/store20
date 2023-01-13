import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments-shopping-cart',
  templateUrl: './payments-shopping-cart.component.html',
  styleUrls: ['./payments-shopping-cart.component.scss']
})
export class PaymentsShoppingCartComponent implements OnInit {


  formPayments: FormGroup;
  constructor(
    private formBuilder : FormBuilder
  ) { 

    this.formPayments = this.buildForm()

  }

  ngOnInit(): void {
  }

  buildForm(){
    this.formPayments = this.formBuilder.nonNullable.group({
      paymentType:['paypal', Validators.required]
    })
    return this.formPayments
  }

}
