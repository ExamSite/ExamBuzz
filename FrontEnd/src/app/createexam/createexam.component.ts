import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createexam',
  templateUrl: './createexam.component.html',
  styleUrls: ['./createexam.component.css']
})
export class CreateexamComponent implements OnInit {
  dynamicbg;
  constructor(private router:Router) { }

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

}
