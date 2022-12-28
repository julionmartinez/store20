export interface ProductsGral {
    id?:string,
    nameProduct:string,
    subtitle:string,
    description:string,
    price:number,
    discount?:number,
    urlImg:string,
    valoration?:number,
    stock:number,
    statusProduct?: 'online' | 'offline',
    category?: string,
    bestSeller?: 'yes' | 'no' ;
    priceBuy?:number,
}
