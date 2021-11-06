import { Component, OnInit } from '@angular/core';
import {SignUpModel} from '../../modele/SingUp.mode';
import {BlocModel} from '../../modele/bloc.model';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';
import {BlocService} from '../../Service/bloc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-resevation',
  templateUrl: './add-resevation.component.html',
  styleUrls: ['./add-resevation.component.scss']
})
export class AddResevationComponent implements OnInit {
  user=new SignUpModel();
  partie:any;
  bloc=new BlocModel();
  time:any;
  constructor(private partieService:PartieService, private userService:UserService, private blocService:BlocService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
    this.getPartieId(this.router.snapshot.params.id)
    this.getblocstade(this.partie.stade.id)

  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        console.log(this.user)
      }
    )
  }

  getPartieId(id){
    this.partieService.getPartieId(id).subscribe(
      (res:any)=>{
        console.log(res)
        this.partie=res
     this.time=this.partie.date.substring(11,16)
          this.partie.date=this.partie.date.substring(0,10)
          this.partie.equipeLocaux.logo = atob(this.partie.equipeLocaux.logo);
          this.partie.equipeVisiteur.logo = atob(this.partie.equipeVisiteur.logo);
          this.partie.equipeVisiteur.logo = atob(this.partie.equipeVisiteur.logo);

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
