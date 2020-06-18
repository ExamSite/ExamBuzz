import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserProp;

  PassProp;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.router.navigate(['/dashboard'])
    }
  }
  LogIn(){

    this.ds.signIn({email:this.UserProp,password:this.PassProp})
    .subscribe((response)=>{
      if(response.status=="ok"){
        localStorage.setItem('name',response.data[0].name)
        localStorage.setItem('email',response.data[0].email)
        this.router.navigate(['/dashboard'])
      }
      else{
        alert("dont be smart")
        this.router.navigate(['/signup'])
      }
    })


    
  }

}
