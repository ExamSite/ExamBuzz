import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // baseURL = "http://localhost/"
  baseURL = "http://13.58.188.98/"
  constructor(private http:HttpClient) { }

  SignUp(d):any{
    return this.http.post(this.baseURL + 'sign-up', d);
  }
  LogIn(d):any{
    return this.http.post(this.baseURL + 'sign-in',d)
  }
  CreatePaper(d):any{
    return this.http.post(this.baseURL + 'create-paper',d)
  }
  // JoinPaper(d):any{
  //   return this.http.post('http://localhost:5000/join-paper',d)
  // }
  FetchPaperData(d):any{
    return this.http.post(this.baseURL + 'my-created-papers',d)
  }
  submitPaper(d):any{
    return this.http.post(this.baseURL + 'submit-paper',d)
  }
  showPaperDetail(d):any{
    return this.http.post(this.baseURL + 'show-paper-detail',d)
  }
  joinPaper(d):any{
    return this.http.post(this.baseURL + 'join-paper',d)
  }
  dateTimeDurationFetch(d):any{
    return this.http.post(this.baseURL + 'date-time-duration-fetch',d)
  }
  SubmitAns(d):any{
    return this.http.post(this.baseURL + 'submit-ans',d)
  }
  SeeUpdateProfile(d):any{
    return this.http.post(this.baseURL + 'see-update-profile',d)
  }
  UpdateProfile(d):any{
    return this.http.post(this.baseURL + 'update-profile',d)
  }
  FetchPaperDetails(d):any{
    return this.http.post(this.baseURL + 'fetch-paper-details',d)
  }
  UpdateTimeWagera(d):any{
    return this.http.post(this.baseURL + 'update-time-wagera',d)
  }
  FetchJoinedPapers(d):any{
    return this.http.post(this.baseURL + 'fetch-joined-exams',d)
  }
  FetchPaperDetailsForStudent(d):any{
    return this.http.post(this.baseURL + 'fetch-paper-details-for-student',d)
  }
 
}
   

