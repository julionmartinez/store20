import { ShoppingCart } from "./shopping-cart";

export interface CartCreateRegister extends Omit<ShoppingCart, 'numberPhone' | 'datePickup' | 'dateDelivery' | 'paymentType' | 'statusCart' | 'nameCustomer' | 'deliveryType' | 'paymentType' > {
}
