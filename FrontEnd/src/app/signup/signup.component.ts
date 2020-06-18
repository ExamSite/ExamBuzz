import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  NameProp;
  UserProp;
  MobProp;
  EmailProp;
  PassProp;
  RePassProp;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  SignUp(){
    alert("hello")



    this.ds.signUp({name:this.NameProp,user:this.UserProp,mobile:this.MobProp,email:this.EmailProp,password:this.PassProp})
    .subscribe((response)=>{
      alert("hello")
      if(response.status=="ok"){
        // localStorage.setItem('name',response.data[0].name)
        // localStorage.setItem('email',response.data[0].email)

        // this.router.navigate(['/dashboard'])

        alert("registration succesfull you will be redirected to signin")

        this.router.navigate(['/login'])
      }
      else{
        alert("something went wrong")
      }
    })

    }

}
