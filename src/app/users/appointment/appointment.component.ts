import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  getTimeArray: any[]=[];
  getSlotArray: any[]=[];
  
  appointData = {
    name :'',
    email:'',
    appoint_time:'',
    contact_no:'',
    date:'',
    time_slot:''

  }

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
   this.gettimeData();
   this.getappointmentData();
  }

  onchange(){
    const id = this.appointData.appoint_time
    console.log(id)
    this.service.getappointment_time(id).subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.getSlotArray = resultData;
      });
  }

  gettimeData(){
    this.service.appointment_time().subscribe((resultData: any)=>
        {
          console.log(resultData);
          this.getTimeArray = resultData;
        });
    }

  getappointmentData(){
    this.service.appointment_time().subscribe((resultData: any)=>
        {
          console.log(resultData);
          this.getTimeArray = resultData;
        });
    }

  onSubmit(){
    const appointData = new FormData(); 
    appointData.append("name", this.appointData.name)
    appointData.append("email", this.appointData.email)
    appointData.append("appoint_time", this.appointData.appoint_time)
    appointData.append("contactno", this.appointData.contact_no)
    appointData.append("date", this.appointData.date)
    appointData.append("timeslot", this.appointData.time_slot)
    this.service.appointment(appointData).subscribe(
      (response) => {
        console.log(response)
        alert("registration successfully")
        this.router.navigate(['/guest/signin']);
      },
      (error) => {
        alert("registration failed");

      }
    )
  }

}
