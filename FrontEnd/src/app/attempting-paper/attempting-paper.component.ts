import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attempting-paper',
  templateUrl: './attempting-paper.component.html',
  styleUrls: ['./attempting-paper.component.css']
})
export class AttemptingPaperComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ds:DataService) { }
  questions;
  ans;
  examId;
  realAns;
  marks=0;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.questions = d.get('questions')
      this.examId = d.get('examId')
      alert("exam id get " + this.examId)
      console.log("activated questions") 
      // console.log(this.questions)
      // console.log("finding fanny "+typeof(this.questions))
      // console.log(typeof(JSON.parse(this.questions)))


// converting this.questions into object 
      this.questions=JSON.parse(this.questions)
      this.ans = new Array(this.questions.length);
      // alert(this.ans[0])
      //alert("ans lenth is" + this.ans.length);
      // console.log("finding fanny "+typeof(this.questions))



      // this.questions.forEach((q)=>{console.log(q.question)})
      // console.log(typeof(JSON.parse(this.questions)))


    })
  }

  submit(){
    this.marks=0
    alert("submit works")
    this.realAns = this.questions.map((que)=>{
      return que.ans
    })
    console.log(this.realAns)

    for(let i=0;i<this.realAns.length;i++){
      if(this.realAns[i]==this.ans[i]){
        this.marks+=1
      }
    }
    console.log(this.marks)
    this.ds.SubmitAns({examId:this.examId,name:localStorage.getItem('name'),email:localStorage.getItem('email'),submittedAns:this.ans,marks:this.marks})
    .subscribe((response)=>{
      if(response.status=="ok"){
        alert("answers are submitted")
      }
    })
  } 
}
