import { ShoppingCart } from "./shopping-cart";

export interface CreateShoppingCartGuest extends Omit <ShoppingCart, 'numberPhone' | 'datePickup' | 'dateDelivery' | 'email' | 'deliveryType' | 'paymentType' | 'nameCustomer'  > {

}
