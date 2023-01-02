import { User } from "./user";



export interface CreateUser extends Omit<User, 'id' | 'typeUser' 
| 'name' | 'statusTermsAndConditions' | 'statusAdult' | 'statusNoticeOfPrivace' | 'typeUser' | 'location'
> {
}
