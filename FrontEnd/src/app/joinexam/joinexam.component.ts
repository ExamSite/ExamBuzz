import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinexam',
  templateUrl: './joinexam.component.html',
  styleUrls: ['./joinexam.component.css']
})
export class JoinexamComponent implements OnInit {
  dynamicbg;
  examIdProp;
  examPassProp;

  constructor(private router:Router) { }

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
    }

}
