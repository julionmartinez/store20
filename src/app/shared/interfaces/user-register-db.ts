import { User } from "./user";

export interface UserRegisterBD extends Omit<User, 'id' | 'name' | 'location'  >  {
}
