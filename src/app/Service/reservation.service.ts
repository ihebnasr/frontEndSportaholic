import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const URL = 'http://localhost:8080/reservation/';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})}

  constructor(private httpClient:HttpClient) { }
  getAllRes(){
    return this.httpClient.get(URL+"getAll/", this.httpOptions)

  }
  getResParUser(username){
    return this.httpClient.get(URL+"getResUser/"+username,this.httpOptions)
  }

  getResForUser(username){
    return this.httpClient.get(URL+"getResUserDate/"+username,this.httpOptions)

  }
  addReservation(idU,idP,idB,reservation){
    return this.httpClient.post(URL+"add/"+idU+"/"+idP+"/"+idB,reservation,this.httpOptions)
  }

}
