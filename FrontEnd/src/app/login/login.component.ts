import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmailProp;
  PassProp;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.router.navigate(['/dashboard'])
    }
  }

  LogIn() {
    this.ds.LogIn({ Email: this.EmailProp, Password: this.PassProp })
      .subscribe((response) => {
        if(this.EmailProp == null || this.PassProp == null){
          alert('Fill your details');
          this.router.navigate(['/login']);
        } 
        else{
          if (response.status == "ok") {
            localStorage.setItem('name', response.data[0].Name);
            localStorage.setItem('email', response.data[0].Email);
            //alert(response.data[0].Email)
            //console.log(response.data)
            this.router.navigate(['/dashboard']);
          }
          else {
            alert("credentials are incorrect");
          }
        }
      })
  }

}