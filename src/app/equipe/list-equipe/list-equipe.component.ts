import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../Service/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.scss']
})
export class ListEquipeComponent implements OnInit {

  constructor(private equipeService:EquipeService) { }
  equipe:any
  ngOnInit(): void {
    this.getallEquipe()
  }

  getallEquipe(){
    return this.equipeService.allEquipe().subscribe(
      (res:any)=>{
        this.equipe=res
      }
    )
  }

}
