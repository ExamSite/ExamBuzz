import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {
  examId;
  constructor(private ds:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.examId=d.get('examId');
      alert(" asdf asdf "+ this.examId)
    })
    this.ds.showPaperDetail({examId:this.examId})
    .subscribe((response)=>{
      if(response.status=="ok"){
        //do what ever u want buddy
        console.log("ok")
        console.log("this is response data " + response.data)
        alert("response ok")
      }

    })
  }

}
