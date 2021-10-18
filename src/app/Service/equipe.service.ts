import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EquipeModel } from '../modele/Equipe.model';
const URL = 'http://localhost:8080/equipe/';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  httpOption = {headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})};
  // tslint:disable-next-line:max-line-length
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};

  constructor(private httpClient: HttpClient) { }
  allEquipe() {
    return this.httpClient.get(URL + 'getall');
  }
  getEquipe(id: any) {
    return this.httpClient.get<EquipeModel>(URL + `${id}`);
  }

  getNbrEquipe() {
    return this.httpClient.get(URL + 'nbrEquipe', this.httpOption);
  }

  addEquipe(equipe: any) {
    return this.httpClient.post(URL + 'new', equipe, this.httpOptions);
  }
  updateEquipe( id: any, equipe: any) {
    return this.httpClient.put(URL + 'update/' + `${id}`, equipe, this.httpOptions);
  }


}
