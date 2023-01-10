import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  

  formGroupLocation: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authServices : AuthService,

  ) { 
    this.formGroupLocation = this.buildFormLocation()
  }

  ngOnInit(): void {
  }

  buildFormLocation(){
    this.formGroupLocation = this.formBuilder.nonNullable.group({
      locationName:['', Validators.required ],
      calle:['', Validators.required ],
      numero:['', Validators.required],
      colonia:['', Validators.required ],
      municipioDelegacion:['', Validators.required] ,
      estado: ['', Validators.required],
      codigoPostal:[ '', Validators.required ],
      type:['', Validators.required] ,
    })
    return this.formGroupLocation
  }

}
