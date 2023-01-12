import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar : MatSnackBar,
    public dialogRef :MatDialogRef<AddLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data : LocationDelivery,

  ) { 
    this.formGroupLocation = this.buildFormLocation()
  }

  ngOnInit(): void {
    
    
  }

  buildFormLocation(){
   
      if(this.data == undefined){
        this.formGroupLocation = this.formBuilder.nonNullable.group({
          locationName:['', Validators.required ],
          codigoPostal:[ '', Validators.required ],
          addressLarge:['', Validators.required],
          principal:[''] ,
        })
      }else{
        this.formGroupLocation = this.formBuilder.nonNullable.group({
          locationName:[this.data.locationName, Validators.required ],
          codigoPostal:[ this.data.codigoPostal, Validators.required ],
          addressLarge:[this.data.addressLarge, Validators.required],
          principal:[this.data.principal] ,
      })
      }
    return this.formGroupLocation
  }

  cancelClick(){
    this.dialogRef.close()
  }

  saveLocation(){
    if(this.formGroupLocation.valid){
      this.dialogRef.close(this.formGroupLocation.value)
    }else{
      this.openSnackBar('Ups, te falta datos, revisalos por favor', 3)  
    }
  }
  openSnackBar(message:string, time:number){
    this._snackBar.open(message, 'Ok', {
      duration: time * 1000
    })
  }

}
