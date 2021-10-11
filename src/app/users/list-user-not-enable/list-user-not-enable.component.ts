import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user.service';

@Component({
  selector: 'app-list-user-not-enable',
  templateUrl: './list-user-not-enable.component.html',
  styleUrls: ['./list-user-not-enable.component.scss']
})
export class ListUserNotEnableComponent implements OnInit {

  constructor(private userService: UserService) { }
 users: Array<any>;
  ngOnInit(): void {
    this.getUserNotEnable()
  }

  getUserNotEnable() {
    return this.userService.getUserNotEnable().subscribe(
      (res: any) => {

        this.users = res ;
        this.users.forEach(element => {
          element.image = atob(element.image);

        });
      }
    )
  }
}
