import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent implements OnInit {
  quesProp;
  opt1Prop;
  opt2Prop;
  opt3Prop;
  opt4Prop;
  ansProp;
  questionsObj=[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  submit(){
    this.questionsObj.push(
      {
        question:this.quesProp,
        opt1:this.opt1Prop,
        opt2:this.opt2Prop,
        opt3:this.opt3Prop,
        opt4:this.opt4Prop,
        ans:this.ansProp,
      }
    )
    console.log(this.questionsObj)
    this.quesProp=""
    this.opt1Prop=""
    this.opt2Prop=""
    this.opt3Prop=""
    this.opt4Prop=""
    this.ansProp=""


  }
  submitToDb(){
    this.ds.submitPaper({paper:this.questionsObj,examId:localStorage.getItem('examId')})
    .subscribe((response)=>{
      if(response.status=="ok"){
        alert("response status ok")
      }
      else{
        alert("response status not ok")
      }
    })
  }

}
