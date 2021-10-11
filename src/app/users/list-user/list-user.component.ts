import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-list-user',

  templateUrl: './list-user.component.html',
})
export class ListUserComponent implements OnInit {

  listUserEnable:Array<any>;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserEnable()
  }
  getUserEnable(){
    return this.userService.getUserEnable().subscribe(
      (res:any)=>{
        this.listUserEnable=res;
        console.log(this.listUserEnable)
      }
    )
  }

}
