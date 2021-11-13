import { Component, OnInit } from '@angular/core';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';
import {BlocService} from '../../Service/bloc.service';
import {ActivatedRoute} from '@angular/router';
import {BlocPartieService} from '../../Service/bloc-partie.service';

@Component({
  selector: 'app-update-partie',
  templateUrl: './update-partie.component.html',
  styleUrls: ['./update-partie.component.scss']
})
export class UpdatePartieComponent implements OnInit {

  partie:any;
  bloc:any;
  time:any;
  constructor(private blocPartieService:BlocPartieService,private partieService:PartieService, private userService:UserService, private blocService:BlocService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPartieId(this.router.snapshot.params.id)
    this.getbloc(this.partie.stade.id)
  }


  getPartieId(id){
    this.partieService.getPartieId(id).subscribe(
      (res:any)=>{
        this.partie=res
        console.log(this.partie.stade.id)
        this.getbloc(this.partie.stade.id)
        this.time=this.partie.date.substring(11,16)
        this.partie.date=this.partie.date.substring(0,10)
        this.partie.equipeLocaux.logo = atob(this.partie.equipeLocaux.logo);
        this.partie.equipeVisiteur.logo = atob(this.partie.equipeVisiteur.logo);
        this.partie.equipeVisiteur.logo = atob(this.partie.equipeVisiteur.logo);

      },error => console.log(error),
      () => {

      });
  }
  getbloc(id){
    return this.blocPartieService.getBlocPartie(id).subscribe(
      (res:any)=>{

        this.bloc=res;
        console.log(res)
      }
    )
  }

}
