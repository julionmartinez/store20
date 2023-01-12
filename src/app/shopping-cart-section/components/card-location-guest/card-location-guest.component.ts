import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { User } from 'src/app/shared/interfaces/user';
import { AddLocationComponent } from '../dialog/add-location/add-location.component';

@Component({
  selector: 'app-card-location-guest',
  templateUrl: './card-location-guest.component.html',
  styleUrls: ['./card-location-guest.component.scss']
})
export class CardLocationGuestComponent implements OnInit {

  @Input() locationDelivery: LocationDelivery | undefined = undefined;

  @Output() saveLocation = new EventEmitter<LocationDelivery>()

  constructor(
    private userService : AuthService,
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialogLocation(){
    const dialogRef = this.dialog.open(AddLocationComponent, {
      data:this.locationDelivery,
      minWidth: 280,
      maxWidth: 400,
      width: '80vw',
    })
    dialogRef.afterClosed().subscribe((result:LocationDelivery)=>{
      this.saveLocation.emit(result)
    })
   }


 

}
