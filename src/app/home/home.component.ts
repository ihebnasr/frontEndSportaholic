import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {PartieService} from '../Service/partie.service';
import {PartieModele} from '../modele/partie.modele';
import {time} from 'html2canvas/dist/types/css/types/time';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,


})
export class HomeComponent implements OnInit {
  parties:any={};
  totlaRecord: string;
  page:number=1;
  constructor(private partieService:PartieService) { }

  ngOnInit(): void {
    this.getPartie()
  }
  getPartie(){
  this.partieService.getallPartie().subscribe(
    (res:any)=>{
      console.log(res)
      this.parties=res
      this.totlaRecord=res.length
      this.parties.forEach(element => {
        element.time=element.date.substring(11,16)
        element.date=element.date.substring(0,10)
        console.log(element.time)
        element.equipeLocaux.logo = atob(element.equipeLocaux.logo);
        element.equipeVisiteur.logo = atob(element.equipeVisiteur.logo);
      })
    });
  }
  onActivate(event) {
    window.scroll(0,1300);}

  onActivateApropos(event) {
    window.scroll(0,700);}

}
