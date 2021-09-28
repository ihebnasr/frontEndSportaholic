import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EquipeModel } from '../modele/Equipe.model';
const URL = 'http://localhost:8080/equipe/';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private httpClient :HttpClient) { }
  allEquipe(){
    return this.httpClient.get(URL+"getall");
  }
  getEquipe(id:any){
    return this.httpClient.get<EquipeModel>(URL+`${id}`);
  }
}
