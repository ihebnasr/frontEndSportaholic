import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../Service/reservation.service';
import {UserService} from '../../Service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reservation-user',
  templateUrl: './reservation-user.component.html',
  styleUrls: ['./reservation-user.component.scss']
})
export class ReservationUserComponent implements OnInit {

  reservations:any;
  user:any
  isShown:boolean=false
  constructor(private reservationService:ReservationService, private userService:UserService, private route:Router) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        let index = this.user.roles.findIndex(x => x.roleName === "ROLE_ADMIN")
        if(index===0){
          this.isShown=true
        }else {
          this.isShown=false
        }
        console.log(this.isShown)

      },error => console.log(error),() => {
        this.getAllResvation()
      }

    )
  }
  getAllResvation(){
    this.reservationService.getResForUser(this.user.username).subscribe(
      (res:any)=>{
        this.reservations=res
        console.log(this.reservations)
        this.reservations.forEach(e=>{
          e.time=e.partie.date.substring(11,16)
          e.date=e.partie.date.substring(0,10)
          console.log(e.time+"   "+ e.date)
          e.partie.equipeLocaux.logo=atob(e.partie.equipeLocaux.logo)
          e.partie.equipeVisiteur.logo=atob(e.partie.equipeVisiteur.logo)
        })
      }
    )}
  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);

  }
}
