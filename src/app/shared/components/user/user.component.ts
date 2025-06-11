import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  uId !:string;
  userdata !: Iuser
  constructor(
  private userservices : UsersService ,
  private routes: ActivatedRoute 
  ) { }

  ngOnInit(): void {
  this.uId = this.routes.snapshot.params['userId']
  this.userdata = this.userservices.getUserData(this.uId)
 console.log(this.userdata);
 

}

getJoinLabelAndValue(user: Iuser) {
  if (user.joinedDate) {
    return { label: 'Joined on', value: user.joinedDate };
  } else if (user.Since) {
    return { label: 'Experience', value: user.Since };
  } else {
    return null;
  }
}


handleRoleClick(user: Iuser): void {
  if (user.roleLink) {
    window.open(user.roleLink, '_blank');
  }
}


}





