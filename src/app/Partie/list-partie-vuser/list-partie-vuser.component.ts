import { Component, OnInit } from '@angular/core';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';
import {SignUpModel} from '../../modele/SingUp.mode';
import {BlocModel} from '../../modele/bloc.model';
import {BlocService} from '../../Service/bloc.service';

@Component({
  selector: 'app-list-partie-vuser',
  templateUrl: './list-partie-vuser.component.html',
  styleUrls: ['./list-partie-vuser.component.scss']
})
export class ListPartieVUserComponent implements OnInit {
  user=new SignUpModel();
  parties:any={};
  bloc=new BlocModel();
  constructor(private partieService:PartieService, private userService:UserService, private blocService:BlocService) { }

  ngOnInit(): void {
    this.getPartie();
    this.getUser();
  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        console.log(this.user)
      }
    )
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
