import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  examId;
  questions;
  students;
  me;
  data;
  constructor(private route:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.examId = d.get('examId')
    })
    

    this.ds.FetchPaperDetailsForStudent({examId:this.examId})
    .subscribe((response)=>{
      if(response.status=="ok"){
        this.questions = response.data[0].questions;
        this.students = response.data[0].students;
        this.data = response.data[0]
        console.log(this.students)
        this.me = this.students.filter((i)=>{
          if(i.email==localStorage.getItem('email')){
            return true
          }
        })
        this.me = this.me[0]
        console.log(this.me)
        alert("hurrey")

      }
      else{
        alert("nahhh")
      }
    })
  }

}
