import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../_nav';
import {UserService} from '../../Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  user:any
  constructor(private router: Router, private userService:UserService ) {}
  public sidebarMinimized = false;
  public navItems = navItems;
  ngOnInit(): void {
    this.imageUser();
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }
  imageUser(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
        this.user.image=atob(this.user.image)
    }
    )

  }
}
