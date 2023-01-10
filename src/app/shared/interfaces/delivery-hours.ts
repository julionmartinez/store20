export interface DeliveryHours {
    hourStart:string,
    hourFinish:string,
    hoursNumber:number,
    hourRange:string,
    typeDeliveryHours:  'cost' | 'free' | 'express',
    cost:number,
    routeType: 'mananera' | 'noctura' | null,
    status: 'enable' | 'disabled',

}
