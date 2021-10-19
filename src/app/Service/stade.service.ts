import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8080/stade/';

@Injectable({
  providedIn: 'root'
})
export class StadeService {

  httpOption = {headers: new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('token')})}
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};

  constructor(private httpClient :HttpClient) { }

  getNbrStade(){
    return this.httpClient.get(URL+'nbrSate',this.httpOptions);
  }
  getAllStade() {
    return this.httpClient.get(URL + 'getAll', this.httpOptions);
  }
  updateStade(id,stade){
    return this.httpClient.put(URL+"updateStade/"+id,stade,this.httpOptions);
  }
  getStade(id){
    return this.httpClient.get(URL+"Stade/"+id,this.httpOption)
  }
}
