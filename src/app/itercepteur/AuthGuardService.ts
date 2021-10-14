import {LoginService} from '../Service/login.service';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router, private authService: LoginService ) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {

    if (!this.authService.isLogin()) {
      alert('You are not allowed to view this page. You are redirected to login Page');

      //this.router.navigate(["/"],{ queryParams: { retUrl: route.url} });
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
  }

}
