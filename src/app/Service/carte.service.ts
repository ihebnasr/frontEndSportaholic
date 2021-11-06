import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/carte/';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};
  constructor(private httpClient :HttpClient) { }

  addCarte(id,carte){
    return this.httpClient.post(URL+"AddCarte/"+id,carte,this.httpOptions)
  }
  getAllCarte(){
    return this.httpClient.get(URL+"getAll",this.httpOptions);
  }
  getCartByEquipe(id){
    return this.httpClient.get(URL+"getByEquipe/"+id,this.httpOptions)
  }
  updateCarte(id,carte){
    return this.httpClient.put(URL+"updateCarte/"+id,carte,this.httpOptions)
  }
  getcarte(id){
    return this.httpClient.get(URL+"getCarte/"+id,this.httpOptions)
  }

}
