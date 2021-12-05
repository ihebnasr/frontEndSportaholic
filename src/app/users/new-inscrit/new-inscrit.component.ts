import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {EquipeService} from '../../Service/equipe.service';

@Component({
  selector: 'app-new-inscrit',
  templateUrl: './new-inscrit.component.html',
  styleUrls: ['./new-inscrit.component.scss']
})
export class NewInscritComponent implements OnInit {

  constructor(private userService: UserService, private equipeService:EquipeService) { }
  users: Array<any>;
  equipe:any;
  nomEquipe:any;
  totlaRecord: string;
  page:number=1;
  userFiltre: any = { username : '' };
  ngOnInit(): void {
    this.getInscrit();
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
    console.log(newValue);
    this.nomEquipe = newValue.target.value;
  }
  getInscrit() {
    return this.userService.inscrit().subscribe(
      (res: any) => {

        this.users = res ;
        this.totlaRecord=res.length
        this.users.forEach(element => {
          element.image = atob(element.image);

        });
      }
    );
  }
  getUsersEquipe(){
    this.userService.getUserEquipe(this.nomEquipe).subscribe(
      (res:any)=>{
        this.users = res ;
        this.users.forEach(element => {
          element.image = atob(element.image);

        });
      }
    )
  }
}
