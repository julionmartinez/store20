import { ProductsGral } from "./products-gral";

export interface ProductsBuy {
    id?:string,
    product:ProductsGral,
    idProduct:string,
    idBag?:string,
    priceIndividual:number,
    amount:number,
    total:number,
    dateAdd?:any | null,
    position?:number | null,
}
