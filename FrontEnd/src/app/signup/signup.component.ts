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
  //CPassProp;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  /*checkpassword() {
    var p = document.getElementById("pass").value;
    var cp = main.cpass.value;
    if (p != cp) {
      alert("Your Password are mismatch")
    }*/
  
  SignUp(){
    this.ds.SignUp({ Name: this.NameProp, Username: this.UserProp, Mobile: this.MobProp, Email: this.EmailProp, Password: this.PassProp })
    .subscribe((response) => {
      if (this.NameProp == null || this.UserProp == null || this.MobProp == null || this.EmailProp == null || this.PassProp == null){
        alert('Fill your details');
        this.router.navigate(['signup'])
      }
      else{
        if (response.status == "ok") {
          alert('registration successfull please login to use');
          this.router.navigate(['/login']);
        }
        else {
          alert("Email Already Resigtered");
        }
      }
    })
  }
  
}