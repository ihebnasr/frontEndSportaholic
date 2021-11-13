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
  image:any;
  imageCin:any
  num:any;
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
    this.signup.type = newValue;
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
uploadImageCin(imageCin){
  let reader = new FileReader();
  if(imageCin.files.length!==0) {
    reader.readAsDataURL(imageCin.files[0]);
    reader.onload = e => {
      this.imageCin = reader.result;
      this.signup.imageCin=btoa(this.imageCin);
      //this.testImage=atob(this.cv.image)
    }
  }
}
regitre(){

  if(this.signup.registerValidation){

  this.loginService.register(this.signup).subscribe(
    (res:any)=>{
      console.log(res);
      this.num=res.num;
      console.log(this.num);
    },
      (err:any)=>console.log(err),
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
