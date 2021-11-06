import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { EquipeModel } from '../../modele/Equipe.model';
import { EquipeService } from '../../Service/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.scss'],

})
export class ListEquipeComponent implements OnInit {

  constructor(private equipeService: EquipeService) { }
  equipe: Array<any>;
  ngOnInit(): void {
    this.getallEquipe();
  }

  getallEquipe() {
          return this.equipeService.allEquipe ().subscribe (
            ( res: any ) => {
              this.equipe = res;
              console.log ( this.equipe );
              this.equipe.forEach(element => {
                element.logo = atob(element.logo);

              });
            }
          );
        /*this.equipe.forEach(e => {
          e.logo = atob(e.logo); }
          );*/
  }
}
