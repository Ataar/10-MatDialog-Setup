import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit , OnDestroy {

  userId!: string;
  avatar!: string;
  userName!: string;
  userSubscription !:Subscription

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router
  
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    // Search user by ID from array
    if(this.userId)
    {
      this.userService.getUserData(this.userId).subscribe(res=>{
        if (res) {
          this.avatar = res.avatar;
          this.userName = res.name;
        }

      });
    }
    
      // this.route.params
      // .subscribe((params:Params)=>{
      //   console.log(params);
      //  this.userId = params['userId']
      //  this.userService.getUserData(this.userId).subscribe(res=>{
      //    if (res) {
      //    this.avatar = res.avatar;
      //    this.userName = res.name;
      //    }
      //   })
        
      // });
      
  }


  ngOnDestroy(): void {
    // if (this.userSubscription) check karega ki:
    // Kya isme koi subscription object hai?
   // Agar hai to safely unsubscribe karo.
   // Agar nahi hai to kuch mat karo — program continue rahega, koi error nahi.


   if (this.userSubscription) {
      this.userSubscription.unsubscribe();
   }
}


goBack() {
 this.router.navigate(['users']);
}


}














































































// -----------------------------------------------------------------------------------------






// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Iuser } from '../../models/users';
// import { UsersService } from '../../service/users.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent implements OnInit {

//   userInfo!: Iuser;

//   constructor(private route: ActivatedRoute, private userService: UsersService) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.params['userId'];
//     this.userInfo = this.userService.getUserData(id);
//   }
// }

