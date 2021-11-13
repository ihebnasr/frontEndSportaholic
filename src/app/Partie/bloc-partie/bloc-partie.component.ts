import { Component, OnInit } from '@angular/core';
import {BlocPartieService} from '../../Service/bloc-partie.service';
import {PartieService} from '../../Service/partie.service';
import {BlocService} from '../../Service/bloc.service';
import {ActivatedRoute, Router} from '@angular/router';
import {blocPartieModel} from '../../modele/BlocPartie.model';

@Component({
  selector: 'app-bloc-partie',
  templateUrl: './bloc-partie.component.html',
  styleUrls: ['./bloc-partie.component.scss']
})
export class BlocPartieComponent implements OnInit {
  partie:any;
  bloc:any;
  blocPartie=new blocPartieModel();
  constructor(private route:Router,private blocPartieService:BlocPartieService, private partieService:PartieService,private blocService:BlocService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPartieId(this.router.snapshot.params.idP)
    this.getbloc(this.router.snapshot.params.idB)
  }
  getPartieId(id){
    this.partieService.getPartieId(id).subscribe(
      (res:any)=>{
        this.partie=res
        console.log(this.partie)
      }
      )
  }
  getbloc(id){
    this.blocService.getBloc(id).subscribe(
      (res:any)=>{
        this.bloc=res;
        console.log(this.bloc)
      }
    )
  }
  updateBlocPartie(){
    this.blocPartieService.addBlocPartie(this.partie.id,this.bloc.id,this.blocPartie).subscribe(
      (res:any)=>{
        console.log(res)
      },error => console.log(error),
      () => {
        this.route.navigate(['/partie/updatePartie/'+this.partie.id])
      }
    )
  }

}
