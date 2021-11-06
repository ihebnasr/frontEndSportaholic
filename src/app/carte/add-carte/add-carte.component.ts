import { Component, OnInit } from '@angular/core';
import {CarteModele} from '../../modele/Carte.modele';
import {CarteService} from '../../Service/carte.service';
import {EquipeService} from '../../Service/equipe.service';
import {EquipeModel} from '../../modele/Equipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-carte',
  templateUrl: './add-carte.component.html',
  styleUrls: ['./add-carte.component.scss']
})
export class AddCarteComponent implements OnInit {
  carte=new CarteModele();
  equipe:Array<EquipeModel>=[];
 image:any;
 id:any;
  constructor(private carteService:CarteService , private equipeService:EquipeService, private router: Router) { }

  ngOnInit(): void {
    this.getEquipe();
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
    this.id=newValue.target.value;

  }
  uploadImage(image){
    let reader = new FileReader();
    if(image.files.length!==0) {
      reader.readAsDataURL(image.files[0]);
      reader.onload = e => {
        this.image = reader.result;
        this.carte.modelCarte=btoa(this.image);
        console.log(this.carte.modelCarte);

      }
    }
  }
  changeImage(newValue){
    console.log(newValue);
    this.carte.modelCarte=atob(newValue.modelCarte);

  }

  addCarte(){
    return this.carteService.addCarte(this.id,this.carte).subscribe(
      (res:any)=>{
        console.log(res)
      },error => console.log(error),
      () =>{
        this.router.navigate(['/carte/allCarte'])
      }
    )
  }
}
