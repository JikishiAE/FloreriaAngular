import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  _urlApi = "/api/"

  constructor(private http: HttpClient) { }

  loginUser(datos){
    return this.http.post(this._urlApi + "login", datos)
  }

  insertUser(datos){
    return this.http.post(this._urlApi + "insertUser", datos)
  }

  getProducs(){
    return this.http.post(this._urlApi + "seachProducts", '')
  }
}
