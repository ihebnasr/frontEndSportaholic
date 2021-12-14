import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../../Service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  categroie:any
  totlaRecord: string;
  page:number=1;
  CateFilter:any={ nom:""}
  constructor(private categorieService:CategorieService) { }

  ngOnInit(): void {
    this.getcategorie()
  }
  getcategorie(){
    return this.categorieService.getAllcate().subscribe(
      (res:any)=>{
        this.categroie=res;
        this.totlaRecord=res.length
        console.log(this.categroie)
      }
    )
  }
}
