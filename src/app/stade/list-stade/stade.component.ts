import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';
import {BlocService} from '../../Service/bloc.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.scss']
})
export class ListStadeComponent implements OnInit {

  constructor(private stadeService: StadeService,private route: ActivatedRoute ,private blocService:BlocService) { }
  stade: any=[];
  bloc:any=[];
  totlaRecord: string;
  page:number=1;
  ngOnInit(): void {

    this.getSatde();

  }

  getSatde() {
    this.stadeService.getAllStade().subscribe(
      (res: any) => {
        console.log(res);
        this.stade = res;
        this.totlaRecord=res.length
      },error => (error),
      () => {
      }
    );
  }

}
