import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';

@Component({
  selector: 'app-list-partie-user',
  templateUrl: './list-partie-user.component.html',
  styleUrls: ['./list-partie-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListPartieUserComponent implements OnInit {
  user:any;
  parties:any={};
  constructor(private partieService:PartieService, private userService:UserService) { }

  ngOnInit(): void {
    this.getPartie();
    this.getUser();
  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
          this.user=res
        this.user.equipe.logo=atob(this.user.equipe.logo)
      }
    )
  }
  getPartie(){
    this.partieService.getPartieUser().subscribe(
      (res:any)=>{
        console.log(res)
        this.parties=res
        this.parties.forEach(element => {
          element.time=element.date.substring(11,16)
          element.date=element.date.substring(0,10)
          console.log(element.time)
          element.equipeLocaux.logo = atob(element.equipeLocaux.logo);
          element.equipeVisiteur.logo = atob(element.equipeVisiteur.logo);
        })
      });
  }
}
