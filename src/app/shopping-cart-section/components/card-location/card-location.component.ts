import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { MatDialog } from '@angular/material/dialog';
import { AddLocationComponent } from '../dialog/add-location/add-location.component';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})
export class CardLocationComponent implements OnInit {

  @Input() locationDelivery: LocationDelivery | undefined = undefined;
  @Output() saveLocationEvent = new EventEmitter<LocationDelivery>()

  constructor(
    private userService : AuthService,
    private dialog : MatDialog,
    ) {
    
   }

   

  ngOnInit(): void {
    console.log(this.locationDelivery)
  }

  openDialogLocation(){
    const dialogRef = this.dialog.open(AddLocationComponent, {
      data:this.locationDelivery,
      minWidth: 280,
      maxWidth: 400,
      width: '80vw',
    })
    dialogRef.afterClosed().subscribe((result:LocationDelivery)=>{
     if(this.locationDelivery == undefined){
      this.saveLocation(result)?.then( dataFire=>{
        result.id = dataFire.id
        this.saveLocationEvent.emit(result)
      })
     }else {
      console.log(this.locationDelivery, 're')
      this.updateLocation(this.locationDelivery.id!, result)?.then( dataFire=>{
        result.id = this.locationDelivery?.id
        this.saveLocationEvent.emit(result)
      })
     }
    })
   }

  saveLocation(loc:LocationDelivery){
   return this.userService.addLocation(loc)
  }

  updateLocation(id:string, loc: LocationDelivery){
    return this.userService.updateLocation(id, loc)
  }



}
