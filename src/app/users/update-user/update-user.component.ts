import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Service/user.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService,private route: ActivatedRoute   ,private router:Router) { }
  user: any= {};

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.username)
    console.log("hello")
  }

  getUser(username) {
    this.userService.getUser(username).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res;
        this.user.image = atob(this.user.image);
        this.user.equipe.logo = atob(this.user.equipe.logo);
      } ,
      error => {
        console.log(error);
      }
      );
  }


}



