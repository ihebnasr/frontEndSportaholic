import { Component, OnInit } from '@angular/core';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';
import {SignUpModel} from '../../modele/SingUp.mode';
import {BlocModel} from '../../modele/bloc.model';
import {BlocService} from '../../Service/bloc.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-partie-vuser',
  templateUrl: './list-partie-vuser.component.html',
  styleUrls: ['./list-partie-vuser.component.scss']
})
export class ListPartieVUserComponent implements OnInit {
  user:any;
  parties:any={};
  bloc=new BlocModel();
  isShown:boolean=false
  constructor(private partieService:PartieService, private userService:UserService,private route:Router, private blocService:BlocService) { }

  ngOnInit(): void {
    this.getPartie();
    this.getUser();
  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        console.log(this.user)
        this.user.image=atob(res.image)
        let index = this.user.roles.findIndex(x => x.roleName === "ROLE_ADMIN")
        if(index===0){
          this.isShown=true
        }else {
          this.isShown=false
        }
        console.log(this.isShown)

      }
    )
  }
  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);

  }
  getPartie(){
    this.partieService.getPartieVUser().subscribe(
      (res:any)=>{
        console.log(res)
        this.parties=res
        this.parties.forEach(element => {
          element.datetime=element.date
          element.time=element.date.substring(11,16)
          element.date=element.date.substring(0,10)
          console.log(element.time)
          element.equipeLocaux.logo = atob(element.equipeLocaux.logo);
          element.equipeVisiteur.logo = atob(element.equipeVisiteur.logo);
          this.getblocstade(this.parties.stade.id)

        })
      },error => console.log(error),
      () => {

      });
  }
  getblocstade(id){
    return this.blocService.getStadebloc(id).subscribe(
      (res:any)=>{
        this.bloc=res;
        console.log(this.bloc)
      }
    )
  }

}
