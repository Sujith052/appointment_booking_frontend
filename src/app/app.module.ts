import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestmasterComponent } from './guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guesthome/guesthome.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { UsermasterComponent } from './users/usermaster/usermaster.component';
import { AppointmentComponent } from './users/appointment/appointment.component';
import { BookingDetailsComponent } from './users/booking-details/booking-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    SignupComponent,
    SigninComponent,
    UserhomeComponent,
    UsermasterComponent,
    AppointmentComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
