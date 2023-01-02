import { ProductsGral } from "./products-gral";

export interface ProductsBuy {
    id?:string,
    idShoppingCart?:string,
    product:ProductsGral,
    idProduct:string,
    priceIndividual:number,
    amount:number,
    total:number,
    dateAdd?:any | null,
    position?:number | null,
}
