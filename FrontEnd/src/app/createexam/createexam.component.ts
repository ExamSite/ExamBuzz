import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.css']
})
export class CreateexamComponent implements OnInit {
  dynamicbg;
  examNameProp;
  examIdProp;
  examPassProp;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
    this.dynamicbg="active"
    localStorage.setItem('class',this.dynamicbg)
  }
  changeClass(){
    // alert("hello")
    // alert(localStorage.getItem('class'))
    this.dynamicbg="modal-bg";
    this.router.navigate(['/dashboard/modal'])


    }

    create(){
      // alert(this.examPassProp)

      this.ds.CreatePaper({examName:this.examNameProp,examId:this.examIdProp,password:this.examPassProp,email:localStorage.getItem('email')})
      .subscribe((response)=>{
        if(response.status=="ok"){
          alert("registrations successfull")
          alert(localStorage.getItem('email'))
          this.router.navigate(['/dashboard/creationPage'])
        }else{
          alert("please use an unique id")
        }
      })

    }

}
