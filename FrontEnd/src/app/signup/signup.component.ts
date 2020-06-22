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
  //RePassProp;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  SignUp() {
    this.ds.SignUp({ Name: this.NameProp, Username: this.UserProp, Mobile: this.MobProp, Email: this.EmailProp, Password: this.PassProp })
      .subscribe((response) => {
        if (response.status == "ok") {
          alert('registration successfull please login to use');
          this.router.navigate(['/login']);
        }
        else {
          alert("Email Already Resigtered");
        }
      })
  }

}
