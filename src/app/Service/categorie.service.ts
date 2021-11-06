import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/categorie/';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})};
  constructor(private httpClient :HttpClient) { }
  getAllcate(){
    return this.httpClient.get(URL+"getAll",this.httpOptions)
  }
  getCate(id){
    return this.httpClient.get(URL+"getCate"+id,this.httpOptions)
  }
  addCate(categorie){
    return this.httpClient.post(URL+"new",categorie,this.httpOptions)
  }
}
