import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit  , OnDestroy{
 
  // usersArr: Array<Iuser> = [];  
  usersArr: Iuser [] = [];  
  unsubscribe !: Subscription
  constructor(
    // here UsersService will give the data that's why we injected it.
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
  // The method we will use will return an observer and the data will be received only after subscribing.
  // so fetchAllUserdata method will return observable and to get data we have to subscribe
    this.unsubscribe = this.userService.fetchAllUserdata().subscribe(res => {
      this.usersArr = res;
      console.log(this.usersArr);
      
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe()
  }

//  goToUserDetails(userId: number) {
//   this.router.navigate(['/users', userId]);
// }

}

