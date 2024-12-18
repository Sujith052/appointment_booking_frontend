import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userData = {
    name :'',
    email:'',
    contactno:'',
    username:'',
    password:'',

  }

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
   
  }

  onSubmit(){
    const userData = new FormData(); 
    userData.append("name", this.userData.name)
    userData.append("email", this.userData.email)
    userData.append("contactno", this.userData.contactno)
    userData.append("username", this.userData.username)
    userData.append("password", this.userData.password)
    this.service.signup(userData).subscribe(
      (response) => {
        console.log(response)
        console.log("hai")
        alert("registration successfully")
        this.router.navigate(['/guest/signin']);
      },
      (error) => {
        alert("registration failed");

      }
    )
  }

}
