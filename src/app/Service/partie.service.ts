import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/partie/';

@Injectable({
  providedIn: 'root'
})
export class PartieService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};

  constructor(private httpClient:HttpClient) { }
  getallPartie(){
    return this.httpClient.get(URL+"getall",this.httpOptions)
  }
  addPartie(partie,id){
    return this.httpClient.post(URL+"new/"+id,partie,this.httpOptions)
  }
  getPartieUser(){
    return this.httpClient.get(URL+"partieL/"+localStorage.getItem('id'),this.httpOptions)
  }
  getPartieVUser(){
    return this.httpClient.get(URL+"partieV/"+localStorage.getItem('id'),this.httpOptions)
  }
  getPartieId(id){
    return this.httpClient.get(URL+"getPartie/"+id,this.httpOptions)

  }
}
