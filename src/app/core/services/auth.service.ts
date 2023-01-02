import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/shared/interfaces/user';
import { UserRegisterBD } from 'src/app/shared/interfaces/user-register-db';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private nameColletionListUser = 'colletionListUser';
  private idUser: string | null = null;
  private user: User | null = null;
  private userB = new BehaviorSubject < User | null>(null);
  userb$ = this.userB.asObservable()

  private emailUser:string | null = null;
  private emailUserB = new BehaviorSubject<string | null>(null);
  emailUserB$ = this.emailUserB.asObservable();


  constructor(
    private authFire : AngularFireAuth,
    private afs : AngularFirestore,   
  ) { 
    this.hasUser().subscribe(dataUser=>{
     if(dataUser != null){
      this.idUser = dataUser?.uid
      this.emailUser = dataUser?.email
      this.emailUserB.next(this.emailUser)
     }
    })

    this.emailUserB$.subscribe(dataEmail=>{
      if(dataEmail != null){
        this.getUserDB(dataEmail).subscribe(dataUser=>{
         dataUser.map(uuser=>{
        this.user = uuser
        this.userB.next(this.user)
         })
        })
      }
    })

  

    
  }

  hasUser(){
    return this.authFire.authState
  }
  login(email:string, pass:string){
    return this.authFire.signInWithEmailAndPassword(email, pass)
  }

  logout(){
    return this.authFire.signOut()
  }

  createUserEmail(email:string, pass:string){
    return this.authFire.createUserWithEmailAndPassword(email, pass)
  }

  createUserDB(user:UserRegisterBD){
    user.typeUser = 'consumer'
    return this.afs.collection(this.nameColletionListUser).add(user)
  }

  getInfoUser(emailUser:string){
    return this.afs.collection<User>(this.nameColletionListUser, ref=> ref.where('email', '==', emailUser)).valueChanges({idField:'id'})
  }
  getUserFireBase(){
    return this.authFire.currentUser
  }

  getUserDB(email:string){
    return this.afs.collection<User>(this.nameColletionListUser, ref=> ref.where('email', '==', email )).valueChanges({idField:'id'})
  }


}
