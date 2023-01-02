import { ShoppingCart } from "./shopping-cart";

export interface CreateShoppingCartRegister extends Omit <ShoppingCart, 'numberPhone'|  'datePickup' | 'dateDelivery' | 'deliveryType' | 'paymentType' | 'nameCustomer'> {

}
