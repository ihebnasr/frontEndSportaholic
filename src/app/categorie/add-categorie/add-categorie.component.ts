import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../Service/categorie.service';
import {CategorieModele} from '../../modele/categorie.modele';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})
export class AddCategorieComponent implements OnInit {
  categorie= new CategorieModele();
  constructor(private categorieService:CategorieService, private router:Router) { }

  ngOnInit(): void {
  }
 addCate(){
    return this.categorieService.addCate( this.categorie).subscribe(
      (res:any)=>{
        console.log(res)
this.router.navigate(['/categorie/allCategorie'])
      }
    )
 }
}
