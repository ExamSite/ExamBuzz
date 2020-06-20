import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // goToModal(){
  //   this.router.navigate(['modal'])
  // }

}
