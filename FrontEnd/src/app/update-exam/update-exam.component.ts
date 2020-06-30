import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {
  examId;
  questions;
  students;

  time;
  date;
  duration;


  queProp;
  opt1Prop;
  opt2Prop;
  opt3Prop;
  opt4Prop;
  ansProp;

  helperArray;


  constructor(private ds:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.examId=d.get('examId');
      // alert(" asdf asdf "+ this.examId)
    })
    this.ds.FetchPaperDetails({examId:this.examId})
    .subscribe((response)=>{
      if(response.status=="ok"){
        //do what ever u want buddy
        console.log("ok")
        this.questions = response.data.questions;
        this.students = response.data.students;
        this.time = response.data.time;
        this.date = response.data.date;
        this.duration = response.data.duration;
        console.log("questions are" +JSON.stringify(this.questions))

        console.log("this is response data " + response.data)
        // alert("response ok")

        this.helperArray = new Array(this.questions.length)
        // alert(this.helperArray.length)
        for(let i =0;i<this.helperArray.length;i++){
          this.helperArray[i]=i;
        }
        // alert(this.helperArray)
      }
      else{
        alert("not ok")
      }

    })
  }
  update(){
    this.ds.UpdateTimeWagera({examId:this.examId,time:this.time,date:this.date,duration:this.duration})
    .subscribe((response)=>{
      if(response.status=="ok"){
        alert("updated successfully")
      }
    })
  }
  allstudents(){
  
  }

}
