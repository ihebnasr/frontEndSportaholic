import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/bloc/';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};

  constructor(private httpClient :HttpClient) { }
  getStadebloc(id){
    return this.httpClient.get(URL+'blocStade/'+id,this.httpOptions);
  }
  updateBloc(id,bloc){
    return this.httpClient.put(URL+"update/"+id,bloc,this.httpOptions);
  }
  getBloc(id){
    return this.httpClient.get(URL+"bloc/"+id,this.httpOptions);
  }
}
