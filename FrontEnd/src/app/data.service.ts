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
  CreatePaper(d):any{
    return this.http.post('http://localhost:5000/create-paper',d)
  }
  JoinPaper(d):any{
    return this.http.post('http://localhost:5000/join-paper',d)
  }
  FetchPaperData(d):any{
    return this.http.post('http://localhost:5000/my-created-papers',d)
  }
  submitPaper(d):any{
    return this.http.post('http://localhost:5000/submit-paper',d)
  }
}
