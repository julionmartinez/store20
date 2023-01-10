import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { AddLocationComponent } from '../dialog/add-location/add-location.component';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})
export class CardLocationComponent implements OnInit {

  @Input() locationDelivery: LocationDelivery | undefined = undefined; 

  constructor(
    private userService : AuthService,
    private dialog : MatDialog,
  
    ) {
    
   }

   openDialogLocation(){
    const dialogRef = this.dialog.open(AddLocationComponent, {
      data:{locationDeliveryDialog: this.locationDelivery},
      minWidth: 280,
      maxWidth: 400,
      width: '80vw',
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)

    })
   }

  ngOnInit(): void {
    
   
  }

}
