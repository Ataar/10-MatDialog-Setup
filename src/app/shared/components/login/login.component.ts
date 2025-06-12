import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email = '';
  password = '';

@ViewChild('loginForm') loginForm!: NgForm;
    
    constructor(
    private router: Router,
    ) {}
  ngOnInit(): void {
 
  }
  isLoginDisabled = true;

 
  onLogin() {
    if (this.loginForm.valid) {
      // handle login
       console.log("Form Submitted", this.loginForm.value);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.router.navigate(['/users']);
    }
    
  }


}
