import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-class',
  templateUrl: './modal-class.component.html',
  styleUrls: ['./modal-class.component.css']
})
export class ModalClassComponent implements OnInit {
  // @Input() dynamicbg;
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
    this.router.navigate(['/dashboard'])


    }


    goToCreate(){
      // alert("hello")
      
      this.router.navigate(['/dashboard/create'])
    }

    joinExam(){
      this.router.navigate(['/dashboard/join'])
    }
  

}
