import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  SignUp(d):any{
    return this.http.post('http://localhost:5000/sign-up', d);
  }
  LogIn(d):any{
    return this.http.post('http://localhost:5000/sign-in',d)
  }

 
}
