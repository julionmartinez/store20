import { DeliveryHours } from "./delivery-hours";
import { DeliveryTime } from "./delivery-time";
import { LocationDelivery } from "./location-delivery";

export interface ShoppingCart {

    id?:string,
    numberPhone:string,
    dateAdd:any,
    datePickup: string,
    dateDelivery:any,
    email:string | null,
    // producsList?:ProductBuy[],
    customerType: 'guest' | 'register',
    costDelivery: number,
    subtotal:number,
    total:number,
    totalProducts: number,
    nameCustomer:string,
    deliveryType: 'pickup' | 'location',
    paymentType: 'transferencia' | 'efectivo' | 'paypal' | 'card',
    statusCart: 'create' | 'confirm' | 'paid' | 'ready' | 'send' | 'delivery' |'cancel' ,
    // status?: 'create' | 'confirmado' | 'entregado' | 'cancelado'
    deliveryAddress?: LocationDelivery | undefined,
    deliveryTime?:DeliveryTime,
    deliveryHours?:DeliveryHours,
}
