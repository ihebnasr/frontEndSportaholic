import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';

@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.scss']
})
export class ListStadeComponent implements OnInit {

  constructor(private stadeService: StadeService) { }
  stade: any;
  ngOnInit(): void {
    this.getSatde();
  }
  getSatde() {
    this.stadeService.getAllStade().subscribe(
      (res: any) => {
        console.log(res);
        this.stade = res;
      }
    );
  }

}
