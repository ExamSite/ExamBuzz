import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-created-exams',
  templateUrl: './created-exams.component.html',
  styleUrls: ['./created-exams.component.css']
})
export class CreatedExamsComponent implements OnInit {

  createdExams;

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.fetchingData()
  }
  fetchingData(){
  
    // alert(localStorage.getItem('email'))
    this.ds.FetchPaperData({email:localStorage.getItem('email')})
    .subscribe((response)=>{
      if(response.status=="ok"){
        alert("this is working")
        this.createdExams = response.data
        // alert(this.createdExams.JSON())
        console.log(this.createdExams)
        // alert("hello")
      }
      else{

        alert("this aint working")
      }

    })
  }


}
