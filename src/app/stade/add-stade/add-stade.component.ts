import { Component, OnInit } from '@angular/core';
import {StadeService} from '../../Service/stade.service';
import {Router} from '@angular/router';
import {StadeModule} from '../Stade.module';
import {stadeModel} from '../../modele/Stade.model';

@Component({
  selector: 'app-add-stade',
  templateUrl: './add-stade.component.html',
  styleUrls: ['./add-stade.component.scss']
})
export class AddStadeComponent implements OnInit {

  constructor(private stadeService:StadeService,private router:Router) { }
  stade=new stadeModel();
  ngOnInit(): void {
  }
  ajouterStade(){
    return this.stadeService.addStade(this.stade).subscribe(
      (res: any ) => {
        console.log(res);
      },
      (err: any) => console.log(err),
      () => {
        this.router.navigate(['/stade/listStade']);

      }
    );
    console.log(this.stade);

  }


  }

