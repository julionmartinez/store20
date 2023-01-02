import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/interfaces/user';
import { UserRegisterBD } from 'src/app/shared/interfaces/user-register-db';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formRegister:FormGroup;

  formLogin: FormGroup;


  constructor(
    private authServices: AuthService,
    private formBuilder : FormBuilder,
    private _snackBar : MatSnackBar,
    private router : Router,
  ) { 
    this.formRegister = this.buildFormRegister();
    this.formLogin = this.buildFormLogin()
  }

  ngOnInit(): void {
  }

  buildFormRegister(){
    this.formRegister = this.formBuilder.nonNullable.group({
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      statusTermsAndConditions: ['',[Validators.required,Validators.requiredTrue]],
      statusAdult:[false,[Validators.required,Validators.requiredTrue]],
      statusNoticeOfPrivace:[false, [Validators.required,Validators.requiredTrue]],
    })
    return this.formRegister
  }

  buildFormLogin(){
    this.formLogin = this.formBuilder.nonNullable.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })
    return this.formLogin
  }

  onRegister(){
    if(this.formRegister.valid){
      let email = this.emailField?.value
      let pass = this.passwordField?.value
      this.authServices.createUserEmail(email = email, pass = pass)
      .then(result=>{
        let user : UserRegisterBD = {
          email: this.emailField?.value,
          statusTermsAndConditions: this.statusTermsAndConditionsField?.value,
          statusAdult: this.statusAdultField?.value,
          statusNoticeOfPrivace: this.statusNoticeOfPrivaceField?.value,
          typeUser: null,
        }
        this.authServices.createUserDB(user).then(resultTwo=>{
          this.router.navigate(['/user/a/my-account'])
        })
      })
      .catch(error=>{

        let errorCode = error.code

        switch (errorCode){
          case 'auth/email-already-in-use':
            this.openSnackBar('Parece que el correo ya fue utilizado, cambialo o recupera tu contraseña', 4)
          }


      })
    } else {
      this.openSnackBar('Te falta llenar algúnb campo, revisalos por favor', 4)
    }
  }

  onLogin(){

    if(this.formLogin.valid){
      let email = this.emailLoginField?.value;
      let pass = this.passwordLoginField?.value
      this.authServices.login(email = email, pass = pass)
      .then(result=>{
        
      })
      .catch(error=>{
        this.openSnackBar('Tu correo o contraseña no son validos, revisalos por favor', 4)
      })
    } else{
      this.openSnackBar('Ups! Te falta llenar algun campo, revisalos por favor', 3)
    }
  }

  get emailField(){
    return this.formRegister.get('email')
  }

  get passwordField(){
    return this.formRegister.get('password')
  }
  get statusTermsAndConditionsField(){
    return this.formRegister.get('statusTermsAndConditions')
  }
  get statusAdultField(){
    return this.formRegister.get('statusAdult')
  }
  get statusNoticeOfPrivaceField(){
    return this.formRegister.get('statusNoticeOfPrivace')
  }

  get emailLoginField(){
    return this.formLogin.get('email')
  }

  get passwordLoginField(){
    return this.formLogin.get('password')
  }

  openSnackBar(message:string, time:number){
    this._snackBar.open(message, 'Ok', {
      duration: 1000 * time
    })
  }



}
