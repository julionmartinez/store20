import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { DeliveryHours } from 'src/app/shared/interfaces/delivery-hours';
import { DeliveryTime } from 'src/app/shared/interfaces/delivery-time';
import { LocationDelivery } from 'src/app/shared/interfaces/location-delivery';
import { ShoppingCart } from 'src/app/shared/interfaces/shopping-cart';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-location-shopping-cart',
  templateUrl: './location-shopping-cart.component.html',
  styleUrls: ['./location-shopping-cart.component.scss']
})
export class LocationShoppingCartComponent implements OnInit {
  shoppingCart : ShoppingCart | null | undefined = null;
  user: User | null = null;
  locationDeliveryList: LocationDelivery[] = [];
  locationDeliveryPrincipal: LocationDelivery | undefined = undefined
  @Input() set _user(userData: User | null){
    this.user = userData
    if(this.user != null){
      this.userServices.getAdressList().subscribe(data=>{
       this.locationDeliveryList = data
       this.locationDeliveryPrincipal = this.locationDeliveryList.find(loc=> loc.type == 'principal') 
      })
    }
  }
  @Input() set _shoppingCart(sc:ShoppingCart | null | undefined){
    if(sc != null || undefined){
      this.shoppingCart = sc;
    }
    this.buildForm();
    this.fullDateStringField?.valueChanges.subscribe(data=>{

      if(this.shoppingCart != null){
        let deliveryDate = this.optionDeliveryDate.find(date=>date.fullDateString == data)
        this.shoppingCart.deliveryTime = deliveryDate
        this.outUpdateShoppingCart(this.shoppingCart)
      }
    })

    this.deliveryHoursField?.valueChanges.subscribe(data=>{
      
      if(this.shoppingCart != null){
        let horsField = this.deliveryHoursOptions.find(option=> data == option.hourRange)
        this.shoppingCart.deliveryHours = horsField
        this.outUpdateShoppingCart(this.shoppingCart)
      }
      
    })

    this.selectionLocationField?.valueChanges.subscribe(data=>{
      if(this.shoppingCart != null){
        this.shoppingCart.deliveryType = data;
        this.outUpdateShoppingCart(this.shoppingCart)
       
      }
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

  deliveryHoursOptions: DeliveryHours[] = [
    {
      hoursNumber: 0,
      hourRange: '1 hora o menos' ,
      hourStart: '' ,
      hourFinish: '',
      typeDeliveryHours:  'express',
      cost:50,
      routeType: null,
      status: 'enable'
}
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
      name:'Miércoles'
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
      name:'Sábado'
    },
  ] ;

  formGroup : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userServices : AuthService,
  ) { 
    this.formGroup = this.buildForm()
  }

  ngOnInit(): void {
    this.optionDeliveryDate = this.makeDateList();
    this.deliveryHoursOptions = this.makeDeliveryHours();


    this.fullDateStringField?.valueChanges.subscribe(data=>{

      if(this.shoppingCart != null){
        let deliveryDate = this.optionDeliveryDate.find(date=>date.fullDateString == data)
        this.shoppingCart.deliveryTime = deliveryDate
        this.outUpdateShoppingCart(this.shoppingCart)
      }
    })

    this.deliveryHoursField?.valueChanges.subscribe(data=>{
      
      if(this.shoppingCart != null){
        let horsField = this.deliveryHoursOptions.find(option=> data == option.hourRange)
        this.shoppingCart.deliveryHours = horsField
        this.outUpdateShoppingCart(this.shoppingCart)
      }
      
    })

    this.selectionLocationField?.valueChanges.subscribe(data=>{
      if(this.shoppingCart != null){
        this.shoppingCart.deliveryType = data;
        this.outUpdateShoppingCart(this.shoppingCart)
       
      }
    })
  }

  buildForm(){
    this.formGroup = this.formBuilder.nonNullable.group({
      selectionLocation:[this.shoppingCart?.deliveryType == undefined ? 'location' : this.shoppingCart.deliveryType, Validators.required],
      fullDateString:[this.shoppingCart?.deliveryTime?.fullDateString == undefined ? this.optionDeliveryDate[0] : this.shoppingCart.deliveryTime, Validators.required],
      deliveryHours:[this.shoppingCart?.deliveryHours?.hourRange == undefined ? this.deliveryHoursOptions[0] :this.shoppingCart.deliveryHours.hourRange ,Validators.required],
    })
    return this.formGroup
  }

  outUpdateShoppingCart(cart:ShoppingCart){
    this.updateShoppingCart.emit(cart)

  }



  makeDeliveryHours(){
    let todayLet = new Date(2022, 0, 8 , 12,16);
    

    let activeHoursDay = todayLet.getHours() + 1 > this.finishHours ? false : true;

    let rangeHour = Array.from({length: 21-8}, (f,g)=>g + 8);
    let minutesNow = new Date().getMinutes()
    let hourNow = todayLet.getMinutes() > 15 ? todayLet.getHours() + 2 : todayLet.getHours() + 1


    
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
            cost:30,
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
            cost:30,
            routeType: null,
            status:  'enable'
        }
      )

      
    })
      
    }
    return this.deliveryHoursOptions
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
        let fullDayString  = `${textDay}/${textMonth}/${yearText}`;
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
        let fullDayString  = `${textDay}/${textMonth}/${yearText}`;
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
      console.log(this.optionDeliveryDate)
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
}
