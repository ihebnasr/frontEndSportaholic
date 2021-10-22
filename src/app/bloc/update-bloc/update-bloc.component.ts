import { Component, OnInit } from '@angular/core';
import {BlocService} from '../../Service/bloc.service';
import {BlocModel} from '../../modele/bloc.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.scss']
})
export class UpdateBlocComponent implements OnInit {

  constructor(private blocService:BlocService,private route:ActivatedRoute,private router: Router) { }
  bloc=new BlocModel();
  blocUpdate=new BlocModel();
  ngOnInit(): void {
    this.getBlocStade(this.route.snapshot.params.id)
  }
  getBlocStade(id){
    return this.blocService.getBloc(id).subscribe(
      (res:any)=>{
        console.log(res)
        this.bloc=res;
      }
    )
  }
  updatebloc(){

    return this.blocService.updateBloc(this.route.snapshot.params.id,this.blocUpdate).subscribe(
      (res:any)=>{
        console.log(this.blocUpdate)
      },error => console.log(error),() =>{

        this.router.navigate(['/stade/listStade'])
      }

    )
  }


}
