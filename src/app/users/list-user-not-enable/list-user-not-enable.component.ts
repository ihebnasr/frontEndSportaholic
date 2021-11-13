import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';
import {EquipeService} from '../../Service/equipe.service';

@Component({
  selector: 'app-list-user-not-enable',
  templateUrl: './list-user-not-enable.component.html',
  styleUrls: ['./list-user-not-enable.component.scss']
})
export class ListUserNotEnableComponent implements OnInit {

  constructor(private userService: UserService, private equipeService:EquipeService) { }
 users: Array<any>;
  equipe:any;
  nomEquipe:any;
  ngOnInit(): void {
    this.getUserNotEnable();
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
  getUserNotEnable() {
    return this.userService.getUserNotEnable().subscribe(
      (res: any) => {

        this.users = res ;
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
