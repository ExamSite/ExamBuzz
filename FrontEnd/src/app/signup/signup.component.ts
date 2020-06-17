import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  SignUp(){

  }

}
