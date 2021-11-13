import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/partieBloc/';

@Injectable({
  providedIn: 'root'
})
export class BlocPartieService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};
  constructor(private httpClient :HttpClient) { }
  addBlocPartie(idp,idb,blocPartie){
    return this.httpClient.post(URL+"partieBloc/"+idp+"/"+idb,blocPartie,this.httpOptions);
  }
  getBlocPartie(id){
    return this.httpClient.get(URL+"getBlocPartie/"+id,this.httpOptions);
  }

}
