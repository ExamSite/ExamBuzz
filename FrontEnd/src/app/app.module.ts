import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WebsiteComponent } from './website/website.component';

import { HttpClientModule } from'@angular/common/http';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ModalClassComponent } from './modal-class/modal-class.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { JoinexamComponent } from './joinexam/joinexam.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    DashboardComponent,
    ProfileComponent,
    WebsiteComponent,
    ProfileHeaderComponent,
    ModalClassComponent,
    CreateexamComponent,
    JoinexamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
