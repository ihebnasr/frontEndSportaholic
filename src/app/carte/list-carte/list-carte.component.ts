import { Component, OnInit } from '@angular/core';
import {CarteService} from '../../Service/carte.service';

@Component({
  selector: 'app-list-carte',
  templateUrl: './list-carte.component.html',
  styleUrls: ['./list-carte.component.scss']
})
export class ListCarteComponent implements OnInit {
 carte: Array<any>;
  constructor(private carteService:CarteService) { }

  ngOnInit(): void {
    this.getAllcarte();
  }
  getAllcarte(){
    return this.carteService.getAllCarte().subscribe(
      (res:any)=>{
        this.carte=res;
        this.carte.forEach(element => {
          element.modelCarte = atob(element.modelCarte);

        });

          }
          )
  }
}
