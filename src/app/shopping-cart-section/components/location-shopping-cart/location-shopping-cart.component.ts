import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/core/services/auth.service';
import { DeliveryHours } from 'src/app/shared/interfaces/delivery-hours';
import { DeliveryTime } from 'src/app/shared/interfaces/delivery-time';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';
import { User } from 'src/app/shared/interfaces/user';
import { ListLocationsComponent } from '../sheet/list-locations/list-locations.component';

@Component({
  selector: 'app-location-shopping-cart',
  templateUrl: './location-shopping-cart.component.html',
  styleUrls: ['./location-shopping-cart.component.scss']
})
export class LocationShoppingCartComponent implements OnInit {
  shoppingCart : ShoppingCart | undefined = undefined;
  user: User | null = null;
  locationDeliveryList: LocationDelivery[] = [];
  locationDeliveryPrincipal: LocationDelivery | undefined = undefined;
  @Input() set _user(userData: User | null){
    this.user = userData;

    if(this.user != null && this.shoppingCart?.deliveryAddress == undefined ){
      this.userServices.getAdressList().subscribe(data=>{
       this.locationDeliveryList = data;
       this.locationDeliveryPrincipal = this.locationDeliveryList.find(loc=> loc.principal == true); 
      });
    }
  }


  @Input() set _shoppingCart(sc:ShoppingCart | undefined){

    if(sc != undefined){
      this.shoppingCart = sc;
      if(this.shoppingCart?.deliveryAddress != undefined){
        this.locationDeliveryPrincipal = this.shoppingCart.deliveryAddress;
      }
      if(this.shoppingCart?.deliveryType != undefined){
        let dateTime = this.shoppingCart.deliveryTime?.fullDateString == undefined ? null : this.shoppingCart.deliveryTime.fullDateString
        this.makeDeliveryHours(this.shoppingCart.deliveryType, this.shoppingCart.subtotal, dateTime)
      }
      
      
    }
    this.buildForm()
   

    this.fullDateStringField?.valueChanges.subscribe(data=>{

      if(this.shoppingCart != undefined){
        let deliveryDate = this.optionDeliveryDate.find(date=>date.fullDateString == data)
        this.shoppingCart.deliveryTime = deliveryDate
        this.outUpdateShoppingCart(this.shoppingCart)
      }
    })

    this.deliveryHoursField?.valueChanges.subscribe(dataHour=>{
      this.switchDeliveryHours(dataHour)
      
    })

    this.selectionLocationField?.valueChanges.subscribe(dataLocation=>{
      this.switchDeliveryLocation(dataLocation, 'input')
    })

    
  }
  @Output() updateShoppingCart = new EventEmitter<ShoppingCart>();

  today: Date = new Date();
  
  startHours = 8;
  finishHours = 21;

  todayj= new Date()
  optionDeliveryHours = Array.from({length: 21 - 8},  (f,g)=>g + 8);

  optionDeliveryDate: DeliveryTime[] = []
 
  deliveryHours: number[] = []

  deleryHourExpress :DeliveryHours = {
    hoursNumber: 0,
    hourRange: '1 hora o menos' ,
    hourStart: '' ,
    hourFinish: '',
    typeDeliveryHours: 'express',
    cost:50,
    routeType: null,
    status: 'enable'
}

  deliveryHoursOptions: DeliveryHours[] = [
    
  ];

  dayWeekList: { number:number, name:string}[] = [
    {
      number:0,
      name:'Domingo'
    },
    {
      number:1,
      name:'Lunes'
    },
    {
      number:2,
      name:'Martes'
    },
    {
      number:3,
      name:'Mi??rcoles'
    },
    {
      number:4,
      name:'Jueves'
    },
    {
      number:5,
      name:'Viernes'
    },
    {
      number:6,
      name:'S??bado'
    },
  ] ;

  locationStore : LocationDelivery = {
      locationName: 'DetinMarin',
      emailUser: '',
      calle:'',
      numero: '',
      colonia: '',
      municipioDelegacion: '',
      estado: '',
      codigoPostal: '59877',
      principal: false,
      addressLarge: 'Virrey de mendoza 804 Las Fuentes, Zamora Michoac??n',
  }

  formGroup : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userServices : AuthService,
    private _bottomSheet : MatBottomSheet,
  ) {
    this.optionDeliveryDate = this.makeDateList();
    // this.deliveryHoursOptions = this.makeDeliveryHours('location', this.shoppingCart?.subtotal!, null, 'contructor')

    
   
    

    this.formGroup = this.buildForm();

  }

  ngOnInit(): void {
    if(this.shoppingCart!= undefined){
      this.deliveryHoursOptions = this.makeDeliveryHours(this.shoppingCart.deliveryType, this.shoppingCart?.subtotal, null)
      
    }
    
    


    this.fullDateStringField?.valueChanges.subscribe(data=>{
      this.switchDeliveryDate(data)
     
    })

    this.deliveryHoursField?.valueChanges.subscribe(dataHour=>{
      this.switchDeliveryHours(dataHour)

      
    })

    this.selectionLocationField?.valueChanges.subscribe(dataLocation=>{
      this.switchDeliveryLocation(dataLocation, 'init')  
    })
  }

  buildForm(){
    this.formGroup = this.formBuilder.nonNullable.group({
      selectionLocation:[this.shoppingCart?.deliveryType == undefined ? 'location' : this.shoppingCart.deliveryType, Validators.required],
      fullDateString:[this.shoppingCart?.deliveryTime == undefined ? this.optionDeliveryDate[0].fullDateString : this.shoppingCart.deliveryTime.fullDateString, Validators.required],
      deliveryHours:[this.shoppingCart?.deliveryHours?.hourRange == undefined ? '' :this.shoppingCart.deliveryHours.hourRange ,Validators.required],
      
    })
    return this.formGroup
  }

  openBottomSheet(){
    this.goPrueba()
    const sheetRef = this._bottomSheet.open(ListLocationsComponent)
    sheetRef.afterDismissed().subscribe(resultLoc=>{
      this.saveLocation(resultLoc)
    })
  }

  outUpdateShoppingCart(cart:ShoppingCart){
    this.updateShoppingCart.emit(cart)
  }

  saveLocation(loc: LocationDelivery){
   if (this.shoppingCart != null){
    this.shoppingCart.deliveryAddress = loc
    this.outUpdateShoppingCart(this.shoppingCart)
  }
  }

  makeDeliveryHours(dataLoc: 'location' | 'pickup', subtotal: number, date: string | null){
    let todayLet: Date = date == null ?  new Date() : new Date(Date.parse(`${date}T00:00:00.000`))
    let activeHoursDay = todayLet.getHours() + 1 > this.finishHours ? false : true;

    let rangeHour = Array.from({length: 21-8}, (f,g)=>g + 8);
    let minutesNow = new Date().getMinutes()
    let hourNow = todayLet.getMinutes() > 15 ? todayLet.getHours() + 2 : todayLet.getHours() + 1


    this.deleryHourExpress.cost = dataLoc == 'pickup' || subtotal > 299  ? 0: 50,
    this.deliveryHoursOptions = []
    this.deliveryHoursOptions.push(this.deleryHourExpress)

    
    if(activeHoursDay){       
    rangeHour.forEach(hours=>{
      let hourStart = hours > 9 ? `${hours}:00` : `0${hours}:00`
      let hourFinish = hours + 1 > 9 ? `${(hours + 1 )}:00`  : `0${hours + 1}:00`
      this.deliveryHoursOptions.push(
        {
          hoursNumber: 5,
            hourRange: `${hourStart} - ${hourFinish}` ,
            hourStart: '' ,
            hourFinish: '',
            typeDeliveryHours:  'cost',
            cost: dataLoc == 'pickup' || subtotal > 299  ? 0: 30,
            routeType: null,
            status:  hourNow > hours ? 'disabled' : 'enable'
        }
      )
    })
    }else {  
    rangeHour.forEach(hours=>{
      let hourStart = hours > 9 ? `${hours}:00` : `0${hours}:00`
      let hourFinish = hours + 1 > 9 ? `${(hours + 1 )}:00`  : `0${hours + 1}:00`
      this.deliveryHoursOptions.push(
        {
          hoursNumber: 5,
            hourRange: `${hourStart} - ${hourFinish}` ,
            hourStart: hourStart ,
            hourFinish: hourFinish,
            typeDeliveryHours:  'cost',
            cost: dataLoc == 'pickup' || subtotal > 299  ? 0: 30,
            routeType: null,
            status:  'enable'
        }
      )
    })
      
    }
    return this.deliveryHoursOptions
  }
  switchDeliveryHours(dataHours:string){
   
    if(this.shoppingCart != undefined){
      let horsField = this.deliveryHoursOptions.find(option=> dataHours == option.hourRange)
      if(horsField != undefined){
        this.shoppingCart.deliveryHours = horsField
        this.shoppingCart.costDelivery = horsField.cost
        this.shoppingCart.total += horsField.cost
      }
      this.outUpdateShoppingCart(this.shoppingCart)
    }
  }

  switchDeliveryLocation(dataLoc: 'location' | 'pickup', zone:string){
    if (this.shoppingCart != null){
      this.shoppingCart.deliveryType = dataLoc;
      if (dataLoc == 'pickup'){
        this.deliveryHoursOptions.forEach(hhour=>{
          hhour.cost = 0
        })
        this.shoppingCart.costDelivery = 0
        this.shoppingCart.total = this.shoppingCart.subtotal
      } else{
        this.deliveryHoursOptions.forEach(hhhour=>{
          if(hhhour.hourRange == '1 hora o menos'){
            hhhour.cost = this.shoppingCart?.subtotal! > 299 ? 0 : 50
          }else {
            hhhour.cost = this.shoppingCart?.subtotal! > 299 ? 0 : 30
          }
        }) 
      }
      this.outUpdateShoppingCart(this.shoppingCart)
    }
    
  }

  switchDeliveryDate(fullDateStrin:string){
    if(this.shoppingCart != undefined){
      let deliveryDate = this.optionDeliveryDate.find(date=>date.fullDateString == fullDateStrin)
      this.shoppingCart.deliveryTime = deliveryDate
      let makeDateString = `${fullDateStrin}`
      this.makeDeliveryHours(this.shoppingCart.deliveryType, this.shoppingCart.subtotal,makeDateString)
      this.outUpdateShoppingCart(this.shoppingCart)
    }

  }

  makeDateList(){
    let todayLet = new Date();
    
    let dayToday = todayLet.getDate();
    let monthToday = todayLet.getMonth() + 1;
    let year = todayLet.getFullYear();
    let listDays = Array.from({length:6}, (f,g)=> g + 0 )

    let activeHoursDay = todayLet.getHours() + 1 > this.finishHours ? false : true;
    
    

    if(activeHoursDay){
      listDays.forEach(day=>{
        
        let textDay =  new Date(year, monthToday, dayToday + day).getDate() > 9 ? new Date(year, monthToday, dayToday + day).getDate().toString() : `0${new Date(year, monthToday, dayToday + day).getDate()}`;
        let textMonth = new Date(year, monthToday, dayToday + day).getMonth() > 9 ? new Date(year, monthToday, dayToday + day).getMonth().toString() : `0${new Date(year, monthToday, dayToday + day).getMonth()}`;
        let yearText = `${new Date(year, monthToday, dayToday + day).getFullYear()}`;
        let numberDay = new Date(year, monthToday - 1, dayToday + day).getDay();
        let fullDayString  = `${yearText}-${textMonth}-${textDay}`;
        this.optionDeliveryDate.push({
          day: textDay,
          month:textMonth,
          year: yearText,
          nameDay: this.dayWeekList.find(dayy=> dayy.number == numberDay)?.name!,
          fullDateString:fullDayString,
          fullDayDate: new Date(year, monthToday - 1, dayToday + day) ,
          hours:0,
          routeType: null,
          typeDeliver: 'cost',
          costDelivery: 0,
          dateFixed: this.today,
        })
      })
      }else{

        listDays.forEach(day=>{
          day += 1
          let textDay =  new Date(year, monthToday, dayToday + day).getDate() > 9 ? new Date(year, monthToday, dayToday + day).getDate().toString() : `0${new Date(year, monthToday, dayToday + day).getDate()}`;
        let textMonth = new Date(year, monthToday, dayToday + day).getMonth() > 9 ? new Date(year, monthToday, dayToday + day).getMonth().toString() : `0${new Date(year, monthToday, dayToday + day).getMonth()}`;
        let yearText = `${new Date(year, monthToday, dayToday + day).getFullYear()}`;
        let numberDay = new Date(year, monthToday - 1, dayToday + day).getDay();
        let fullDayString  = `${yearText}-${textMonth}-${textDay}`;
        this.optionDeliveryDate.push({
          day: textDay,
          month:textMonth,
          year: yearText,
          nameDay: this.dayWeekList.find(dayy=> dayy.number == numberDay)?.name!,
          fullDateString:fullDayString,
          fullDayDate: new Date(year, monthToday - 1, dayToday + day) ,
          hours:0,
          routeType: null,
          typeDeliver: 'cost',
          costDelivery: 0,
          dateFixed: this.today,
        })
      })
      }
      return this.optionDeliveryDate

    }

    get selectionLocationField(){
      return this.formGroup.get('selectionLocation')
    }

    get fullDateStringField(){
      return this.formGroup.get('fullDateString')
    }

    get deliveryHoursField(){
      return  this.formGroup.get('deliveryHours')
    }

    goPrueba(){
      console.log(this.formGroup.value, 'pon link a whatsapp')
    }
}
