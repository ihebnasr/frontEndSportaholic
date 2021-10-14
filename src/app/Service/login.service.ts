import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';


const URL = 'http://localhost:8080/users/';
const AUTH_DATA = 'auth_data';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private isloggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) {
  this.isloggedIn=false;
  }
  login(LoginModel) {
    this.isloggedIn=true;
    return this.http.post(URL + 'signIn', LoginModel, this.httpOptions);
  }
  register(SignUpModel) {
    return this.http.post(URL + 'signUp' , SignUpModel, this.httpOptions) ;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.isloggedIn=false;
  }
  expiredToken(token){
    return this.http.get(URL+"expired/"+token)
  }
  isLogin(){
    return this.isloggedIn;
  }
}
