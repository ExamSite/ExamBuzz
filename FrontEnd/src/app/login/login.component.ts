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
        if (response.status == "ok") {
          localStorage.setItem('name', response.data[0].name);
          localStorage.setItem('email', response.data[0].email);
          localStorage.setItem('role', response.data[0].role);
          this.router.navigate(['/dashboard']);
        }
        else {
          alert("credentials are incorrect");
        }
      })
  }

}