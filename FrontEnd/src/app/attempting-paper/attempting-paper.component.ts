import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attempting-paper',
  templateUrl: './attempting-paper.component.html',
  styleUrls: ['./attempting-paper.component.css']
})
export class AttemptingPaperComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  questions;
  ans;

  opt1Prop;
  opt2Prop;
  opt3Prop;
  opt4Prop;


  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.questions = d.get('questions')
      console.log("activated questions") 
      // console.log(this.questions)
      // console.log("finding fanny "+typeof(this.questions))
      // console.log(typeof(JSON.parse(this.questions)))


// converting this.questions into object 
      this.questions=JSON.parse(this.questions)
      this.ans = new Array(this.questions.length);
      //alert("ans lenth is" + this.ans.length);
      // console.log("finding fanny "+typeof(this.questions))



      // this.questions.forEach((q)=>{console.log(q.question)})
      // console.log(typeof(JSON.parse(this.questions)))


    })
  }

  submit(){
    this.opt1Prop;
  }

}
