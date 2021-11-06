import { Component, OnInit } from '@angular/core';
import {CarteModele} from '../../modele/Carte.modele';
import {CarteService} from '../../Service/carte.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipeService} from '../../Service/equipe.service';

@Component({
  selector: 'app-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.scss']
})
export class UpdateCarteComponent implements OnInit {
  carte=new CarteModele();
  carteUpdate=new CarteModele();
  image:any;
  equipe:any;
  id:any
  constructor(private carteService:CarteService,private route:ActivatedRoute,private equipeService:EquipeService,private router:Router) { }

  ngOnInit(): void {
    this.getCart(this.route.snapshot.params.id)
    this.getEquipe()
  }
  getEquipe(){
    return this.equipeService.allEquipe().subscribe(
      (res:any)=>{
        console.log(res);
        this.equipe=res;
      }
    );
  }

  onChangeEquipe(newValue){
    console.log(newValue.target.value);
    this.carteUpdate.equipe.id=newValue.target.value;

  }
  getCart(id){
    return this.carteService.getcarte(id).subscribe(
      (res:any)=> {
        this.carte = res;
        console.log(this.carte)
        this.carte.modelCarte=atob(this.carte.modelCarte)
      },error => console.log(error)
    )
  }
  uploadImage(image) {
    const reader = new FileReader();
    if (image.files.length !== 0) {
      reader.readAsDataURL(image.files[0]);
      reader.onload = e => {
        this.image = reader.result;
        this.carteUpdate.modelCarte = btoa(this.image);
        console.log(this.carteUpdate.modelCarte );
        // this.testImage=atob(this.cv.image)
      };
    }
  }
  updatecarte(){
    return this.carteService.updateCarte(this.route.snapshot.params.id,this.carteUpdate).subscribe(
      (res:any)=>{
        console.log(this.carteUpdate)
      },error =>  console.log(error),
      () => {
        this.router.navigate(['/carte/allCarte']);
      }
    )
  }
}
