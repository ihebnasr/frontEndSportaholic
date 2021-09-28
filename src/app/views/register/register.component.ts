import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeModel } from '../../modele/Equipe.model';
import { SignUpModel } from '../../modele/SingUp.mode';
import { EquipeService } from '../../Service/equipe.service';
import { LoginService } from '../../Service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  signup= new SignUpModel();
  equipe:Array<EquipeModel>=[];
  selected=[];
  types=["abonne","public","jornalisme","arbitre"];

  constructor(private loginService:LoginService, private router: Router, private equipeService:EquipeService ) { }
  ngOnInit(): void {
    this.getEquipe();
  }

  getEquipe(){
    return this.equipeService.allEquipe().subscribe(
      (res:any)=>{
        console.log(res);
        this.equipe=res;
      }
    );
  }

  onChangeEquipe(newValue){
    console.log(newValue);
    this.signup.equipe.id = newValue;
  }
  onChange(newValue) {
    console.log(newValue);
    this.signup.type = newValue;
}
regitre(){
 
  if(this.signup.registerValidation){

  this.loginService.register(this.signup).subscribe(
    (res:any)=>{
      console.log(res);
    },
      (err:any)=>console.log(err),
     ()=> {
        this.router.navigate(['/login']);

      }
  );
  }
}
getEquipeUser(){
  this.equipe.forEach(element => {
    this.equipeService.getEquipe(element).subscribe(
    (res:any)=>{
      this.selected.push(res)
    }
    );
  });

}

}
