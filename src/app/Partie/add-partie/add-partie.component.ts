import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';
import {PartieService} from '../../Service/partie.service';
import {EquipeService} from '../../Service/equipe.service';
import {PartieModele} from '../../modele/partie.modele';
import {Router} from '@angular/router';
import {CategorieService} from '../../Service/categorie.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-add-partie',
  templateUrl: './add-partie.component.html',
  styleUrls: ['./add-partie.component.scss']
})
export class AddPartieComponent implements OnInit {
  stade:any;
  equipe:any;
  partie=new PartieModele();
  idStade:any;
  categroie:any;
  idEL:any;
  idEV:any;
  isShown:boolean=false
  message:any
  constructor(private categorieService:CategorieService,private stadeService:StadeService ,private equipeService:EquipeService,private partieService:PartieService,private router:Router) { }

  ngOnInit(): void {
    this.getSatde();
    this.getEquipe();
    this.getcategorie();
  }
  getcategorie(){
    return this.categorieService.getAllcate().subscribe(
      (res:any)=>{
        this.categroie=res;
        console.log(this.categroie)
      }
    )
  }
  getSatde(){
    this.stadeService.getAllStade().subscribe(
      (res:any) => {
        this.stade=res
      },error => console.log(error)
    )

  }
  getEquipe(){
    return this.equipeService.allEquipe().subscribe(
      (res:any)=>{
        console.log(res);
        this.equipe=res;
      }
    );
  }
  onChangeSatde(newValue){
    console.log(newValue.target.value);
    this.partie.stade.id=newValue.target.value;
    this.idStade=newValue.target.value;

  }
  onChangeCategorie(newValue){
    console.log(newValue.target.value);
    this.partie.categroie.id=newValue.target.value;

  }
  onChangeEquipeV(newValue){
    console.log(newValue.target.value);
    this.partie.equipeVisiteur.id=newValue.target.value;
    this.idEV=newValue.target.value;

  }

  onChangeEquipeL(newValue){
    console.log(newValue.target.value);
    this.partie.equipeLocaux.id=newValue.target.value;
    this.idEL=newValue.target.value;

  }
  addPartie(){

    return this.partieService.addPartie(this.partie,this.idStade).subscribe(
      (res:any)=>{
        console.log(this.partie)
      },(error:HttpErrorResponse) => {console.log(error)
        this.isShown=true
        this.message=error.error.message;
      },
      () => {
        this.router.navigate(['/partie/listPartie'])
      }

    )

  }


}
