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
    if(this.quesProp==null && this.opt1Prop==null && this.opt2Prop==null && this.opt3Prop==null && this.opt4Prop==null && this.ansProp==null){
      alert("put values")
      return
    }
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
    this.quesProp=null
    this.opt1Prop=null
    this.opt2Prop=null
    this.opt3Prop=null
    this.opt4Prop=null
    this.ansProp=null


  }
  submitToDb(){
    if(this.questionsObj.length==0){
      alert("pls put question and answers")
      return
    }
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
