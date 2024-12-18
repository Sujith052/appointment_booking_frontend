import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit{
  getAppointmentDataArray: any[]=[];

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
   this.getappointmentData();
  }

  getappointmentData(){
    this.service.appointment_details().subscribe((resultData: any)=>
        {
          console.log(resultData);
          this.getAppointmentDataArray = resultData;
        });
    }
}
