import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../Service/categorie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieModele} from '../../modele/categorie.modele';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {
  categorie=new CategorieModele()
  categorieUpdate=new CategorieModele()
  constructor(private categorieService:CategorieService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategorie(this.route.snapshot.params.id)
  }
  getCategorie(id){
      return this.categorieService.getCate(id).subscribe(
        (res:any)=>{
          this.categorie=res;

        }
      )
  }
  updateCate(){
    this.categorieService.updateCate(this.categorie.id,this.categorieUpdate).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigate(['/categorie/allCategorie'])
      }
    )
   }
}
