export interface LocationDelivery {
    id?:string,
    locationName:string,
    emailUser:string,
    calle:string,
    numero:string,
    colonia:string,
    municipioDelegacion:string,
    estado:string,
    codigoPostal:string,
    type: 'principal' | 'other',
}
