import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeModel } from '../../modele/Equipe.model';
import { SignUpModel } from '../../modele/SingUp.mode';
import { EquipeService } from '../../Service/equipe.service';
import { LoginService } from '../../Service/login.service';
import {getErrorMessage} from 'codelyzer/templateAccessibilityElementsContentRule';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  signup= new SignUpModel();
  equipe:Array<EquipeModel>=[];
  selected=[];
  types=["abonne","public","jornalisme","arbitre"];
  image:any;
  imageCIn:any
  num:any;
  message:any;
  isShown:boolean=false
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
    this.signup.equipe.id = newValue.target.value;
  }
  onChange(newValue) {
    console.log(newValue);
    this.signup.type = newValue.target.value;
}
uploadImage(image){
  let reader = new FileReader();
  if(image.files.length!==0) {
    reader.readAsDataURL(image.files[0]);
    reader.onload = e => {
      this.image = reader.result;
      this.signup.image=btoa(this.image);
      //this.testImage=atob(this.cv.image)
    }
  }
}
uploadImageCin(imageCIn){
  let reader = new FileReader();
  if(imageCIn.files.length!==0) {
    reader.readAsDataURL(imageCIn.files[0]);
    reader.onload = e => {
      this.imageCIn = reader.result;
      this.signup.imageCIn=btoa(this.imageCIn);
    }
  }
}
regitre(){

  if(this.signup.registerValidation){
 this.signup.username.Lower
    this.signup.password.Lower
  this.loginService.register(this.signup).subscribe(
    (res:any)=>{
      console.log(res);
      this.num=res.num;
      console.log(this.num);
    },
      (err:HttpErrorResponse)=>{console.log(err)
        this.isShown=true
       this.message=err.error.message;
      },
     ()=> {
        this.router.navigate(['/codeConfirmation/codeconfirm/'+this.num]);

      }
  );
  }
  console.log(this.signup);
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
