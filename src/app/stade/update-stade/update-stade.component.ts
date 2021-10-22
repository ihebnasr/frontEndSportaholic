import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BlocService} from '../../Service/bloc.service';
import {StadeModule} from '../Stade.module';
import {stadeModel} from '../../modele/Stade.model';
import {BlocModel} from '../../modele/bloc.model';

@Component({
  selector: 'app-update-stade',
  templateUrl: './update-stade.component.html',
  styleUrls: ['./update-stade.component.scss']
})
export class UpdateStadeComponent implements OnInit {

  constructor(private stadeService:StadeService,private router :Router,private route: ActivatedRoute,private blocService:BlocService) { }

  stade=new stadeModel();
  stadeUpdate=new stadeModel();
  bloc:any;
  blocUpdade=new BlocModel();
  ngOnInit(): void {
    this.getStade(this.route.snapshot.params.id)
    console.log('test')
  }

  getStade(id){
    return this.stadeService.getStade(id).subscribe(
      (res:any)=>{
        console.log(res)
     this.stade=res;
        this.getbloc(this.stade.id)
      },
      (err: any)=>console.log(err),
      )


  }
  getbloc(id){
    return this.blocService.getStadebloc(id).subscribe(
      (res:any)=>{

      this.bloc=res;
        console.log(this.bloc)
      }
    )
  }

  updateStade() {

    return this.stadeService.updateStade(this.route.snapshot.params.id, this.stadeUpdate).subscribe(
      (res: any) => {
        console.log(this.stadeUpdate);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/stade/listStade']);

      }
    );
  }

}
