import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attempting-paper',
  templateUrl: './attempting-paper.component.html',
  styleUrls: ['./attempting-paper.component.css']
})
export class AttemptingPaperComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ds:DataService,private router:Router) { }
  questions;
  questions2;
  ans;
  examId;

  //for date
  date;
  time;
  duration;
  temp;
  temp2;
  temp3;
  temp4;

  examDate;
  todaysDateObject;
  // todaysDate;



  docsForFetchDate; 


  
  realAns;
  marks=0;

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.questions2 = d.get('questions')
      this.examId = d.get('examId')
      
      // alert("exam id get " + this.examId)

      console.log("activated questions") 
      // console.log(this.questions)
      // console.log("finding fanny "+typeof(this.questions))
      // console.log(typeof(JSON.parse(this.questions)))


// converting this.questions into object 
      
      


    })

  //new ds starts here ///////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  this.ds.dateTimeDurationFetch({examId:this.examId})
  .subscribe((response)=>{
    this.docsForFetchDate = response.data
    console.log(this.docsForFetchDate)
    // alert(this.docsForFetchDate.duration)
   
    if(response.status=="ok"){
     
      // alert("response time"+ this.docsForFetchDate.time + " " + this.docsForFetchDate.date)
      this.todaysDateObject = new Date()
      if(this.todaysDateObject.getMonth()+1<10){
        this.temp = "0" + (this.todaysDateObject.getMonth()+1)
        }



      this.date = this.todaysDateObject.getFullYear() + '-' + this.temp +"-"+((this.todaysDateObject.getDate()>=10)?(this.todaysDateObject.getDate()):("0"+this.todaysDateObject.getDate()))
      this.time = ((this.todaysDateObject.getHours()>=10)?(this.todaysDateObject.getHours()):("0"+this.todaysDateObject.getHours())) + ":" + ((this.todaysDateObject.getMinutes()>=10)?(this.todaysDateObject.getMinutes()):("0"+this.todaysDateObject.getMinutes()))
   

      if(this.date == this.docsForFetchDate.date){
        this.duration = this.docsForFetchDate.duration;

        this.temp2 = this.docsForFetchDate.time.split(":")
        this.temp3 = this.time.split(":")
        this.temp4 = this.docsForFetchDate.time.split(":")
        this.temp4[0]=Number(this.temp4[0])
        this.temp4[1]=Number(this.temp4[1])
        // alert("temp4 " + this.temp4[0] + " " + this.temp4[1] + "temp 3 is " + this.temp3[0] + " " + this.temp3)

        
        //finding paper end time//
        this.endTime()
        

        if(this.temp3[0]>=this.temp2[0] && this.temp3[0]<=this.temp4[0]){
          // if((this.temp3[0]==this.temp2[0] && (this.temp3[1]>=this.temp2[1] && this.temp3[1]<=this.temp4[1])) || (this.temp3[0]==this.temp4[0] && this.temp3[1]<=this.temp4[1])){
            // alert("sab theek he meri jaan")
            if((this.temp2[0]==this.temp4[0]) && (this.temp2[1]<=this.temp3[1] && this.temp3[1]<=this.temp4[1])){
              alert("1 " + this.temp2)
              alert("1 " + this.temp3)
              alert("1 " + this.temp4)
              this.questions = this.questions2;
          this.questions=JSON.parse(this.questions)
          this.ans = new Array(this.questions.length);
          }
          else if(this.temp2[0]==this.temp3[0] && this.temp2[0]!=this.temp4[0] && this.temp3[1]>=this.temp2[1]){
            alert("2 " + this.temp2)
              alert("2 " + this.temp3)
              alert("2 " + this.temp4)
              this.questions = this.questions2;
          this.questions=JSON.parse(this.questions)
          this.ans = new Array(this.questions.length);
          }
          else if(this.temp3[0]==this.temp4[0] && this.temp3[1]<=this.temp4[1]){
            alert("3 " + this.temp2)
              alert("3 " + this.temp3)
              alert("3 " + this.temp4)
              this.questions = this.questions2;
          this.questions=JSON.parse(this.questions)
          this.ans = new Array(this.questions.length);
          }
          else{
            alert(this.temp2)
            alert(this.temp3)
            alert(this.temp4)
            alert("be on time on test 0")
            this.router.navigate(['/dashboard'])
          }
          
        }
        else{
          alert("be on time on test 1")
            this.router.navigate(['/dashboard'])
        }
        
      }
      else{
        alert("be on time on test 3")
            this.router.navigate(['/dashboard'])
      }




      
    }
    else{
      alert("date time not ok")
    }
  })
  //new ds ends here /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  }

  endTime(){
    if(this.docsForFetchDate.duration>=60){
      this.temp4[0] += Math.floor(this.docsForFetchDate.duration/60)
      this.temp4[1] += this.docsForFetchDate.duration%60
      // alert("endgame" + this.temp4)
      if(this.temp4[1]>60){
        this.temp4[0] += Math.floor(this.temp4[1]/60)
        this.temp4[1] = this.temp4[1]%60;
        // alert("endgame" + this.temp4)
      }
    }else{
      this.temp4[1] += this.docsForFetchDate.duration%60
      if(this.temp4[1]>60){
        this.temp4[0] += Math.floor(this.temp4[1]/60)
        this.temp4[1] = this.temp4[1]%60;
      }
    }
    // alert("this .temp4 " + this.temp4[0] +":" + this.temp4[1])
    this.addZero()
    // alert("this .temp4 " + this.temp4[0] +":" + this.temp4[1])
  }

  addZero(){
    if(this.temp4[0]<10){
      this.temp4[0]="0"+this.temp4[0]
    }
    if(this.temp4[1]<10){
      this.temp4[1]="0"+this.temp4[1]
    }
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
        this.router.navigate(['/dashboard'])
      }
    })
  } 
}
