import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:"",component:WebsiteComponent,children:[
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'login',component:LoginComponent},
    {path: 'signup', component:SignupComponent }


  ]},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"",component:ProfileComponent}
  ]}
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
