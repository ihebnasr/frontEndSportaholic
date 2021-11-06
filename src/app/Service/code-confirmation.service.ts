import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:8080/Send/';

@Injectable({
  providedIn: 'root'
})
export class CodeConfirmationService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  constructor(private httpClient:HttpClient) { }
  sendcode(num){
    return this.httpClient.get(URL+"send/"+num);
  }
  getcode(code,num){
    return this.httpClient.post(URL+"getcode/"+num,code,this.httpOptions);
  }
}
