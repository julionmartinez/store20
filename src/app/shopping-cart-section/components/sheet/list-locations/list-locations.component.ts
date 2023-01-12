import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { MatDialog} from '@angular/material/dialog';
import { AddLocationComponent } from '../../dialog/add-location/add-location.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss']
})
export class ListLocationsComponent implements OnInit {

  listLocationDelivery : LocationDelivery[] = [];


  constructor(
    private authServices : AuthService,
    private dialog : MatDialog,
    private _sheetBooton : MatBottomSheetRef<ListLocationsComponent>
  ) { }

  ngOnInit(): void {
    this.authServices.getAdressList().subscribe(data=>{
      this.listLocationDelivery = data
    })
  }

  deleteLocation(idLocation:string){
    this.authServices.deleteLocation(idLocation)
  }

  openDialogLocationEdit(loc:LocationDelivery | undefined){
    const dialogRef = this.dialog.open(AddLocationComponent,{
      data:loc,
      minWidth: 280,
      maxWidth: 440,
      width: '80vw',
    })
    dialogRef.afterClosed().subscribe((result:LocationDelivery)=>{
      if(loc == undefined){
        this.authServices.addLocation(result)?.then(resultafs=>{

        })
        
      }else{
        this.authServices.updateLocation(loc.id!, result)?.then(resultAfs=>{
        })
       
      }
    })
  }
  selecLocation(loc:LocationDelivery){
    this._sheetBooton.dismiss(loc)
  }

}
