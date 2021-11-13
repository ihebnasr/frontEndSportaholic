import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../Service/reservation.service';


@Component({
  selector: 'app-list-resevation',
  templateUrl: './list-resevation.component.html',
  styleUrls: ['./list-resevation.component.scss']
})
export class ListResevationComponent implements OnInit {
  reservations:any;
  username:any;
  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.getAllResvation();
  }
 getAllResvation(){
     this.reservationService.getAllRes().subscribe(
     (res:any)=>{
       this.reservations=res
       console.log(this.reservations)
      this.reservations.forEach(e=>{
        e.time=e.partie.date.substring(11,16)
        e.date=e.partie.date.substring(0,10)
        console.log(e.time+"   "+ e.date)
      })
     }
    )}
    getResUser(){
    this.reservationService.getResParUser(this.username).subscribe(
      (res:any)=>{
        this.reservations=res
        console.log(this.reservations)
        this.reservations.forEach(e=>{
          e.time=e.partie.date.substring(11,16)
          e.date=e.partie.date.substring(0,10)
          console.log(e.time+"   "+ e.date)
        })
      }
    )
    }

}
