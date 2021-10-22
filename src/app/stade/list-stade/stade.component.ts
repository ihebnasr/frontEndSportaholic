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
  ngOnInit(): void {

    this.getSatde();

  }

  getSatde() {
    this.stadeService.getAllStade().subscribe(
      (res: any) => {
        console.log(res);
        this.stade = res;
      },error => (error),
      () => {
      }
    );
  }

}
