import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestmasterComponent } from './guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guesthome/guesthome.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UsermasterComponent } from './users/usermaster/usermaster.component';
import { UserhomeComponent } from './users/userhome/userhome.component';
import { AppointmentComponent } from './users/appointment/appointment.component';
import { BookingDetailsComponent } from './users/booking-details/booking-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/guest/home', pathMatch: 'full' },
  { path: 'guest', component: GuestmasterComponent,
    children:[
      { path: 'home', component: GuesthomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
    ]
   },
   { path: 'user', component: UsermasterComponent,
    children:[
      { path: 'home', component: UserhomeComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'booking_details', component: BookingDetailsComponent },
    ]
   },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
