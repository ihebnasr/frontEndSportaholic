import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import {EquipeService} from '../../Service/equipe.service';

@Component({
  selector: 'app-list-user',

  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit {

  listUserEnable: Array<any>;
  nomEquipe:any;
  equipe:any

  constructor(private userService: UserService, private equipeService:EquipeService) {
  }

  ngOnInit(): void {
    this.getUserEnable();
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
    console.log(newValue);
    this.nomEquipe = newValue.target.value;
  }
  getUserEnable() {
    return this.userService.getUserEnable().subscribe(
      (res: any) => {
        this.listUserEnable = res;
        this.listUserEnable.forEach(element => {
          element.image = atob(element.image);

        });
        console.log(this.listUserEnable);
      }
    );
  }
  getUsersEquipe(){
    if (this.nomEquipe===null){
      this.getUserEnable()
    }else {
    this.userService.getUserEquipeEnable(this.nomEquipe).subscribe(
      (res:any)=>{
        this.listUserEnable = res;
        this.listUserEnable.forEach(element => {
          element.image = atob(element.image);
        });
      }
    )
  }
  }

}
