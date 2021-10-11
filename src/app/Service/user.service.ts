import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8080/users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})}

  constructor(private httpClient: HttpClient) { }

getUserEnable() {
  return this.httpClient.get(URL + 'Enabled', this.httpOptions);
}
getUser(username: any) {
  return this.httpClient.get(URL + `${username}`, this.httpOptions);
}
getUserNotEnable() {
    return this.httpClient.get(URL + 'NotEnable', this.httpOptions);
}
}
