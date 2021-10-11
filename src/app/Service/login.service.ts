import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


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

  constructor(private http: HttpClient, private router: Router) {

  }
  login(LoginModel) {
    return this.http.post(URL + 'signIn', LoginModel, this.httpOptions);
  }
  register(SignUpModel) {
    return this.http.post(URL + 'signUp' , SignUpModel, this.httpOptions);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
