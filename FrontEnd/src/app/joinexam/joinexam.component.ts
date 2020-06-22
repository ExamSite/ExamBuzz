import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joinexam',
  templateUrl: './joinexam.component.html',
  styleUrls: ['./joinexam.component.css']
})
export class JoinexamComponent implements OnInit {
  dynamicbg;
  examIdProp;
  examPassProp;

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
    this.dynamicbg="active"
  }
  changeClass(){
    // alert("hello")
    // alert(localStorage.getItem('class'))
    this.dynamicbg="modal-bg";
    this.router.navigate(['/dashboard/modal'])


    }
    join(){
      alert(this.examIdProp)
      alert(this.examPassProp)

      this.ds.joinPaper({examId:this.examIdProp,password:this.examPassProp})
      .subscribe((response)=>{
        if(response.status=="ok"){
          alert("response status ok and " + JSON.stringify(response.data))
          this.router.navigate(['dashboard/attempting-paper'])
        }
        else{
          alert("enter right examid or password")
        }
      })
    }

}
