import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeModel } from '../../modele/Equipe.model';
import { EquipeService } from '../../Service/equipe.service';
@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.scss']
})
export class UpdateEquipeComponent implements OnInit {

  //constructor() { }
  equipe = new EquipeModel();
  equipeUpdate: {} ;
  image: any;
  constructor(private equipeService: EquipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEquipeId(this.route.snapshot.params.id);
    console.log('test');
  }
  getEquipeId(id: any) {
    this.equipeService.getEquipe(id).subscribe(
      (res: any) => {
        console.log(res);
        this.equipe = res;
      }
    );
  }
  uploadImage(image) {
    const reader = new FileReader();
    if (image.files.length !== 0) {
      reader.readAsDataURL(image.files[0]);
      reader.onload = e => {
        this.image = reader.result;
        this.equipe.logo = btoa(this.image);
        console.log(this.equipe.logo);
        // this.testImage=atob(this.cv.image)
      };
    }
  }
  updateEquipe() {
    this.equipeUpdate = {
      nomEquipe: this.equipe.nomEquipe,
      abrviation: this.equipe.abrviation,
      logo: this.equipe.logo

    };
    return this.equipeService.updateEquipe(this.route.snapshot.params.id, this.equipeUpdate).subscribe(
      (res: any) => {
        console.log(this.equipeUpdate);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        this.router.navigate(['/equipes/allequipe']);

      }
    );
  }

  }
