export interface User {
    id:string,
    name:string,
    email:string,
    location:Location,
    statusTermsAndConditions: boolean,
    statusAdult:boolean,
    statusNoticeOfPrivace:boolean,
    typeUser: 'superAdmin' | 'consumer' | null,
}
