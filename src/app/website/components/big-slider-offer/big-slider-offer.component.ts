import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ModelImage } from 'src/app/shared/interfaces/model-image';

@Component({
  selector: 'app-big-slider-offer',
  templateUrl: './big-slider-offer.component.html',
  styleUrls: ['./big-slider-offer.component.scss']
})
export class BigSliderOfferComponent implements OnInit {

  listImageOffer: ModelImage[] = [
    {
      urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fsave20.png?alt=media&token=47129526-5d16-47d3-9c1d-a268473aa963',
      urlImgTablet:'',
      urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo%3Dsave.png?alt=media&token=390f0edd-8dab-44a7-9bbb-289f7cd21ef7',
    },
    {
      urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fdelivery-express.png?alt=media&token=04397c21-8304-4da7-a3db-c14e34e45bd5',
      urlImgTablet:'',
      urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo%3Dpinata.png?alt=media&token=3d213dba-97b3-4644-beec-7025218ab443',
    },
    {
      urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpinatas-off.png?alt=media&token=e67714f4-23d4-476e-877f-ff47d32ca1c5',
      urlImgTablet:'',
      urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo%3Dpromo5.png?alt=media&token=4d5e9d8f-78aa-4960-85b1-88282d35b889',
    },
    {
      urlImgDesktop: 'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo-msi.png?alt=media&token=edc43654-40c9-4d45-88da-4168df281d35',
      urlImgTablet:'',
      urlImgMobile:'https://firebasestorage.googleapis.com/v0/b/markettutti.appspot.com/o/image-store20%2Fpromo%3Ddelivery-express.png?alt=media&token=0446f200-d494-47b0-b504-9cefafd4c0eb',
    }
  ]

  statusScreen: boolean = true


  constructor(
    public breakPointObserver : BreakpointObserver,
  ) {
    this.breakPointObserver
    .observe(['(max-width:600px)'])
    .subscribe((state:BreakpointState)=>{
      this.statusScreen = state.matches;
    })
   }

  ngOnInit(): void {

    
  }

}
