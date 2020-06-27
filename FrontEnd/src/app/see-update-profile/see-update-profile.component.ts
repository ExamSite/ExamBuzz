import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-see-update-profile',
  templateUrl: './see-update-profile.component.html',
  styleUrls: ['./see-update-profile.component.css']
})
export class SeeUpdateProfileComponent implements OnInit {

  constructor(private ds:DataService) { }

  NameProp;
  UserProp;
  MobProp;
  EmailProp;
  PassProp;


  ngOnInit(): void {
    // alert("ng on init works")
    this.fetchData()
  }


  fetchData():any{
    this.ds.SeeUpdateProfile({email:localStorage.getItem('email')})
    .subscribe((response)=>{
      if(response.status=="ok"){
        // alert("response status ok")
        console.log("response status ok")
        this.NameProp=response.data.Name;
        this.UserProp=response.data.Username;
        this.MobProp=response.data.Mobile;
        this.EmailProp=response.data.Email;
        this.PassProp=response.data.Password;

      }
      else{
        alert("not ok")
      }
    })
  }

  update(){
    this.ds.UpdateProfile({email:localStorage.getItem('email'),name:this.NameProp,username:this.UserProp,mobile:this.MobProp,emailUp:this.EmailProp,password:this.PassProp})
    .subscribe((response)=>{
      if(response.status=="ok"){
        alert("hurrey!")
        localStorage.removeItem('email')
        localStorage.setItem('email',this.EmailProp)
        localStorage.removeItem('name')
        localStorage.setItem('name',this.NameProp)
      }
      else{
        alert("nothing ")
      }
    })
  }

}
