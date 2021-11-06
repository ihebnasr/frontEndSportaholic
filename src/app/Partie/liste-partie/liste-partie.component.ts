import { Component, OnInit } from '@angular/core';
import {PartieService} from '../../Service/partie.service';

@Component({
  selector: 'app-liste-partie',
  templateUrl: './liste-partie.component.html',
  styleUrls: ['./liste-partie.component.scss']
})
export class ListePartieComponent implements OnInit {
  parties:any={};
  constructor(private partieService:PartieService) { }

  ngOnInit(): void {
    this.getPartie()
  }
  getPartie(){
    this.partieService.getallPartie().subscribe(
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
