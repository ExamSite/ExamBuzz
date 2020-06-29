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
  temp3

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
   
    if(response.status=="ok"){
     
      // alert("response time"+ this.docsForFetchDate.time + " " + this.docsForFetchDate.date)


      
      
      this.todaysDateObject = new Date()
      if(this.todaysDateObject.getMonth()+1<10){
        this.temp = "0" + (this.todaysDateObject.getMonth()+1)
        
      }



      this.date = this.todaysDateObject.getFullYear() + '-' + this.temp +"-"+this.todaysDateObject.getDate()
      this.time = ((this.todaysDateObject.getHours()>=10)?(this.todaysDateObject.getHours()):("0"+this.todaysDateObject.getHours())) + ":" + ((this.todaysDateObject.getMinutes()>=10)?(this.todaysDateObject.getMinutes()):("0"+this.todaysDateObject.getMinutes()))
   

      if(this.date == this.docsForFetchDate.date){
        this.temp2 = this.docsForFetchDate.time.split(":")
        this.temp3 = this.time.split(":")
        // alert(this.temp2[0] + " hello " + this.temp3[0])
        if(this.temp2[0]<this.temp3[0]){
          // alert("chota hai")
          this.questions = this.questions2;
          this.questions=JSON.parse(this.questions)
          this.ans = new Array(this.questions.length);

        }
        else if(this.temp2[0]==this.temp3[0]){
          if(this.temp2[1]<=this.temp3[1]){
            // alert("sachi me chota hai")
            this.questions = this.questions2;
          this.questions=JSON.parse(this.questions)
          this.ans = new Array(this.questions.length);
          }
          else{
            console.log("abhi time nhi hua hai")
            alert("be on time on test")
            this.router.navigate(['/dashboard'])
          }
        }
        else{
          alert("be on time on test")
          this.router.navigate(['/dashboard'])
        }
        
      }
      else{
        alert("be on time on test")
            this.router.navigate(['/dashboard'])
      }




      
    }
    else{
      alert("date time not ok")
    }
  })
  //new ds ends here /////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
