import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})}

  constructor(private httpClient:HttpClient) { }

  getNbrUser(){
    return this.httpClient.get(URL+'nbrUserEnable',this.httpOptions);
  }

  getNbrUserNotEnabled(){
    return this.httpClient.get(URL+'nbrUserNotEnabled',this.httpOptions);
  }
  getStat(){
    return this.httpClient.get(URL+'statUser',this.httpOptions);
  }
  getStatNbrUser(){
    return this.httpClient.get(URL + 'statNbrUser', this.httpOptions);
  }
}
