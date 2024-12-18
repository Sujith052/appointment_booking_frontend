import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  userData = {
    username:'',
    password:'',

  }

  constructor(private service:ServiceService,private router:Router){}
  
  ngOnInit(): void {
   
  }

  onSubmit(){
  const userData = new FormData();
  userData.append("username", this.userData.username.trim());
  userData.append("password", this.userData.password.trim());

  // Call the signin service
  this.service.signin(userData).subscribe(
    (response: any) => {
      console.log(response);

      // Check the response and navigate to the home page
      if (response?.status === 'success') {
        alert("Login successfully");
        this.router.navigate(['/user/home']);
      } else {
        alert("Login failed: " + (response?.message || 'Unknown error.'));
      }
    },
    (error: any) => {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }
  );
  }
}
