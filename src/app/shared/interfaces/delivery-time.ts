import { DeliveryHours } from "./delivery-hours"

export interface DeliveryTime {
    id?:string,
    fullDayDate?:Date,
    fullDateString:string,
    day:string,
    month:string,
    year: string,
    nameDay:string,
    hours:number,
    dateFixed:Date,
    routeType: 'mananera' | 'noctura' | null,
    typeDeliver: 'cost' | 'free' | 'express'
    costDelivery: number,
    deliveryHours?:DeliveryHours,
}
