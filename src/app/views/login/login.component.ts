import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../modele/login.model';
import { LoginService } from '../../Service/login.service';
import {pipe} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit{
  logIn= new LoginModel();
  token:any;
  user:any;
  message:any;
  isShown:boolean=false
 constructor(private loginService:LoginService, private router: Router){}
 ngOnInit(): void {
    if (localStorage.getItem('token')!==undefined){
      this.loginService.expiredToken(localStorage.getItem('token')).subscribe(
        (res :any)=>{
          if(res===false){
            this.router.navigate(['/']);

          }
        }
      )
    }
 }

  login(){
    if(this.logIn.userValidate){
      this.logIn.username.Lower
      this.logIn.password.Lower
      this.loginService.login(this.logIn).subscribe(
        (res: any) => {
            console.log("User is logged in");
            console.log(res);
            this.user=res;
            this.token=res.token;

    },
        (err:HttpErrorResponse)=>{console.log(err)
          this.isShown=true
          console.log(this.isShown)
          this.message="Votre Nom d'utilisateur où mot de passe est incorrecte";

    },
    ()=>{
      if (this.user.situation!=='enabled'){
        this.isShown=true
        console.log(this.isShown)
        this.message="vous avez été bloqué contacter le service client";
      }else{
      localStorage.setItem("token",this.token);
      localStorage.setItem("id",this.user.id)
      let index = this.user.roles.findIndex(x => x.roleName === "ROLE_ADMIN")
      localStorage.setItem('roles',index);

      console.log(index)

      if (index===0){
      this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/Partie/listPartieUser']);

      }
    }
        }
      );
  }
  }
}






