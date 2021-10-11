import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeModel } from '../../modele/Equipe.model';
import { EquipeService } from '../../Service/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.scss']
})
export class AddEquipeComponent implements OnInit {
  equipe=new EquipeModel();
  image:any
  constructor(private equipesService:EquipeService ,private router:Router) { }

  ngOnInit(): void {
  }

  uploadImage(image){
    let reader = new FileReader();
    if(image.files.length!==0) {
      reader.readAsDataURL(image.files[0]);
      reader.onload = e => {
        this.image = reader.result;
        this.equipe.logo=btoa(this.image);
        console.log(this.equipe.logo)
        //this.testImage=atob(this.cv.image)
      }
    }
  }
  addEquipe(){
    this.equipesService.addEquipe(this.equipe).subscribe(
      (res:any)=>{
        console.log(res);
      },
        (err:any)=>console.log(err),
       ()=> {
          this.router.navigate(['/equipes/allequipe']);
  
        }
    );
        console.log(this.equipe);
    
      }

  
}
