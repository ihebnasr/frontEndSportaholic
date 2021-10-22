import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../modele/login.model';
import { LoginService } from '../../Service/login.service';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  logIn= new LoginModel();
  token:any;
  user:any;
  message:any;
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
      this.loginService.login(this.logIn).subscribe(
        (res: any) => {
            console.log("User is logged in");
            console.log(res);
            this.user=res;
            this.token=res.token;
    },
    (err: any)=>{console.log(err)
      this.message="Username or password incorrect"
    },
    ()=>{
      localStorage.setItem("token",this.token);
      let index = this.user.roles.findIndex(x => x.roleName === "ROLE_ADMIN")
      localStorage.setItem('roles',index);

      console.log(index)
      if (index===0){
      this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/home']);

      }
    }
      );
  }
  }
}






