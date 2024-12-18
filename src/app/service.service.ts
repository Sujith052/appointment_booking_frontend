import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseUrl = "http://127.0.0.1:8000/api/";
  
  constructor(private http:HttpClient) { }

  signup(userData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}signup`,userData);
  }

  signin(userData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}signin`,userData);
  }

  appointment_time(){
    return this.http.get(`${this.baseUrl}appointmentsection`);
  }

  getappointment_time(id:any){
    return this.http.get(`${this.baseUrl}getappointment_section/${id}`);
  }

  appointment(appointmentData:FormData) :Observable<any>{
    return this.http.post(`${this.baseUrl}appointmentsection`,appointmentData);
  }

  appointment_details(){
    return this.http.get(`${this.baseUrl}getappointment_details`);
  }
}
