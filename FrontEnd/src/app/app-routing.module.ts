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
import { AuthGuard } from './auth.guard';
import { ModalClassComponent } from './modal-class/modal-class.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { JoinexamComponent } from './joinexam/joinexam.component';
import { CreationPageComponent } from './creation-page/creation-page.component';
import { CreatedExamsComponent } from './created-exams/created-exams.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { AttemptingPaperComponent } from './attempting-paper/attempting-paper.component';


const routes: Routes = [
    {path:"",component:WebsiteComponent,children:[
      
                                {path:'',component:HomeComponent},
                                {path:'about',component:AboutComponent},
                                {path:'contacts',component:ContactsComponent},
                                {path:'login',component:LoginComponent},
                                {path: 'signup', component:SignupComponent }


  ]},
  {path:"dashboard",canActivate:[AuthGuard],component:DashboardComponent,children:[
    {path:"",component:ProfileComponent,children:[
      {path:"",component:CreatedExamsComponent},
      {path:"modal",component:ModalClassComponent},
      {path:"create",component:CreateexamComponent},
      {path:"join",component:JoinexamComponent},
      {path:"creationPage",component:CreationPageComponent},
      {path:"updateexam",component:UpdateExamComponent},
      {path:"attempting-paper",component:AttemptingPaperComponent}
    
    ]},
    // {path:"modal",component:ModalClassComponent},

    
  
  ]}
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
