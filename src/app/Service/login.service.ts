import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../modele/login.model';
const URL = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
  constructor(private http: HttpClient) { }
  login(LoginModel) {
    return this.http.post(URL+'signIn', LoginModel,this.httpOptions)
}
register(SignUpModel){
  return this.http.post(URL+"signUp",SignUpModel,this.httpOptions);
}

}