import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email = '';
  password = '';
  

    constructor(
    private router: Router,
    ) {}
  ngOnInit(): void {
 
  }

 
  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/users']);
    
  }

}
