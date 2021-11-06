import { Component, OnInit } from '@angular/core';
import {CodeConfirmationService} from '../../Service/code-confirmation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {codeconfirmeModel} from '../../modele/Codeconfirme.model';

@Component({
  selector: 'app-new-code',
  templateUrl: './new-code.component.html',
  styleUrls: ['./new-code.component.scss']
})
export class NewCodeComponent implements OnInit {
  status:any;
  codeConf=new codeconfirmeModel();
  constructor(private codeConfirmationService:CodeConfirmationService,private router: Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.sendSms();

  }
  sendSms(){
    return this.codeConfirmationService.sendcode(this.route.snapshot.params.num).subscribe(
      (res:any)=>{

      },error => {
        console.log(this.codeConf)
        alert("erreur de connexion au serveur. veuillez réessayer plus tard")

      }
    )
  }
  getCode(){
    return this.codeConfirmationService.getcode(this.codeConf,this.route.snapshot.params.num).subscribe(
      res=>{
        console.log(res);
        console.log(this.codeConf);
        alert("votre compte est verifiez ")


      },error => {
          alert("erreur de connexion au serveur. veuillez réessayer plus tard")
          console.log(this.codeConf);

      },() => {
        this.router.navigate(['/'])
      }
    )
  }

}
