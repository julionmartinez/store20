import { ShoppingCart } from "./shopping-cart";

export interface MakeShoppingCart extends Omit< ShoppingCart, 'id'|'numberPhone'| 'dateAdd' | 'datePickup' | 'dateDelivery' | 'email' | 'customerType' | 'nameCustomer' | 'deliveryType' | 'paymentType' | 'statusCart'  > {
}
