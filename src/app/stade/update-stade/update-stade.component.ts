import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';
import {ActivatedRoute} from '@angular/router';
import {BlocService} from '../../Service/bloc.service';

@Component({
  selector: 'app-update-stade',
  templateUrl: './update-stade.component.html',
  styleUrls: ['./update-stade.component.scss']
})
export class UpdateStadeComponent implements OnInit {

  constructor(private stadeService:StadeService,private route: ActivatedRoute,private blocService:BlocService) { }

  stade:any;
  stadeUpdate:any;
  bloc:any;
  ngOnInit(): void {
    this.getStade(this.route.snapshot.params.id)
    console.log('test')
  }

  getStade(id){
    return this.stadeService.getStade(id).subscribe(
      (res:any)=>{
        console.log(res)
     this.stade=res;
      },
      (err: any)=>console.log(err),
      ()=> {
        this.getbloc(this.stade.id)

      })


  }
  getbloc(id){
    return this.blocService.getbloc(id).subscribe(
      (res:any)=>{
        this.bloc=res
        console.log(res)
      }
    )
  }
  updateStade(){}



}
