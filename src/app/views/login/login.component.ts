import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../../modele/login.model';
import { LoginService } from '../../Service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  logIn= new LoginModel();
  token:any;
 constructor(private loginService:LoginService, private router: Router){}
  login(){
    if(this.logIn.userValidate){
      this.loginService.login(this.logIn).subscribe(
        (res: any) => {
            console.log("User is logged in");
            console.log(res);
            this.token=res.token;
    },
    (err: any)=>console.log(err),
    ()=>{
      localStorage.setItem("token",this.token);
      this.router.navigate(['/dashboard']);
    }
      );
  }
  }
}






