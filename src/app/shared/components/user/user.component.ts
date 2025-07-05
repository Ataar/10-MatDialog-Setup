import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit , OnDestroy {

  id!: string;
  avatar!: string;
  name!: string;
  role!:string;
  email!:string;

  userSubscription !:Subscription

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar:MatSnackBar
  
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];

    // Search user by ID from array
    if(this.id)
    {
      this.userService.getUserData(this.id).subscribe(res=>{
        if (res) {
          this.avatar = res.avatar;
          this.name = res.name;
          this.role = res.role;
          this.email = res.email;
        }

      });

      
    }

    // note : - hum same component me hain aur url me param change ho rah hai to us time hum param
    // observable use karte hain aur agar pram change na ho to snapshot.params object use karenge.

        
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



onDelete() {
   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this product?'
      }
    });
  console.log('Deleted:', this.id);
   dialogRef.afterClosed().subscribe(result => {
  if(result)
  {
    this.userService.onDelete(this.id);
    this._snackBar.open('Deleted Successfully!', '', { duration: 1000, horizontalPosition: 'center', verticalPosition: 'top',panelClass: 'user-delete-snackbar' });

  }
})


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

