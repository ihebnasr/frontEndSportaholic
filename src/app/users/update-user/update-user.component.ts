import { Component, OnInit, ViewEncapsulation,VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService,private route: ActivatedRoute   ,private router:Router) { }
  user:any={};
  elementType:any;
  correctionLevel:any;
  qrCodeValue:any
  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.username)
    console.log("hello")

  }

  getUser(username){
    this.userService.getUser(username).subscribe(
      (res:any)=>{
        console.log(res);
        this.user = res;
        this.user.image = atob(this.user.image);
        this.user.equipe.logo = atob(this.user.equipe.logo);
      } ,
      error => {
        console.log(error);
      },() => {
        this.elementType = NgxQrcodeElementTypes.CANVAS;
        this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
        this.qrCodeValue =this.user.username;
      }
      );

  }
  change(x) {
   if (x.target.checked === true) {
     this.user.situation='enabled'
   }else {
     this.user.situation='NotEnabel'
   }
   return this.userService.enabledUSer(this.user.username,x.target.checked).subscribe(
     (res :any)=>{
       console.log(this.user)
     } ,
     error => {
       if(this.user.situation==='enabled'){
        this.user.situation='NotEnabled'
     }else {
         this.user.situation='enabled'
       }
     }
  )
  }



}



