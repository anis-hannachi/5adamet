import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterProfComponent } from './register-prof/register-prof.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminaddservicesComponent } from './adminaddservices/adminaddservices.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainservicesComponent } from './mainservices/mainservices.component';
import { ServicesdescriptionComponent } from './servicesdescription/servicesdescription.component';
import { SuccessComponent } from './success/success.component'


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServiceItemComponent } from './service-item/service-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterProfComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    MybookingsComponent,
    PagenotfoundComponent,
    AdminaddservicesComponent,

    FooterComponent,
    UpdateComponent,
    MainservicesComponent,
    ServicesdescriptionComponent,
    SuccessComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ServiceItemComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }