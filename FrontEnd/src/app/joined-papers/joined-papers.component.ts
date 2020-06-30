import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joined-papers',
  templateUrl: './joined-papers.component.html',
  styleUrls: ['./joined-papers.component.css']
})
export class JoinedPapersComponent implements OnInit {
  joinedExams;

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.ds.FetchJoinedPapers({email:localStorage.getItem('email')})
    .subscribe((response)=>{
      if(response.status=="ok"){
        this.joinedExams =response.data
        // console.log(this.joinedExams)
        alert("okkk")
      }
    })

  }

  fun(d){
    alert("Clicked")
    this.router.navigate(['/dashboard/question-card'],{queryParams:{examId:d.examId}})
  }

}
