import { Component, OnInit } from '@angular/core';
import {SignUpModel} from '../../modele/SingUp.mode';
import {BlocModel} from '../../modele/bloc.model';
import {PartieService} from '../../Service/partie.service';
import {UserService} from '../../Service/user.service';
import {BlocService} from '../../Service/bloc.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BlocPartieService} from '../../Service/bloc-partie.service';
import {ReservationService} from '../../Service/reservation.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-resevation',
  templateUrl: './add-resevation.component.html',
  styleUrls: ['./add-resevation.component.scss']
})
export class AddResevationComponent implements OnInit {
  user:any;
  partie:any;
  bloc:any;
  time:any;
  reservation:any;
  isShownAlert:boolean=false
  isShown:boolean=false
  isShonwAlertRes:boolean=false
  message:any
  constructor(private route:Router,private reservationService:ReservationService, private partieService:PartieService, private userService:UserService, private blocPartieService:BlocPartieService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
    this.getPartieId(this.router.snapshot.params.id)
  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        this.user.image=atob(this.user.image)
        console.log(this.user)
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
  getPartieId(id){
    this.partieService.getPartieId(id).subscribe(
      (res:any)=>{
        this.partie=res
        this.getbloc(this.partie.id)
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
        console.log(this.bloc)
      }
    )
  }

  onActivate(event) {
    window.scroll(0,500);}

  reserve(id){

    this.reservationService.addReservation(this.user.username,this.partie.id,id,{}).subscribe(
      (res:any)=>{
        console.log(res)
        this.isShonwAlertRes = true
        console.log(this.isShownAlert)
        this.message = "Reservation réussite";
        },(err:HttpErrorResponse)=> {
        console.log(err)
        this.isShownAlert = true
        console.log(this.isShownAlert)
        this.message = "L'utilisateur deja reserver une place";
      },

    )
  }
  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);

  }
}
