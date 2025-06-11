import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr: Array<Iuser> = [];

  constructor(
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.fetchAllUserdata().subscribe(res => {
      this.usersArr = res;
    });
  }

  goToUserDetails(userId: string) {
    this.router.navigate(['users', userId]);
  }
}

