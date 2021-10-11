import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8080/stade/';

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})}

  constructor(private httpClient :HttpClient) { }

  getNbrStade(){
    return this.httpClient.get(URL+'nbrSate',this.httpOptions);
  }

}
