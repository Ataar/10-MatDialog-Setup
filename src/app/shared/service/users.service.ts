import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Iuser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<Iuser> = [
    {
      id:' 1',
      name: 'Akash Kale',
      email: 'akash.kale@bing.com',
      role: 'Admin',
      avatar: './assets/images/WhatsApp Image 2025-06-28 at 23.16.26_9047ff07.jpg'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@gmail.com',
      role: 'Editor',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      name: 'Rohan Kulkarni',
      email: 'rohan.kulkarni@rediff.com',
      role: 'Subscriber',
      avatar: './assets/images/Capture.PNG'
    },
    {
      id: '4',
      name: 'Emily Davis',
      email: 'emily.davis@Yahoo.com',
      role: 'Author',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  ];

  constructor(
    private route: Router
  ) {}

  // Api call to get all user data
  fetchAllUserdata(): Observable<Array<Iuser>> {
    return of(this.users);
  }
 
  

  
  // Get single user by ID
  // Api call to get single user data

    getUserData(id: string):Observable <Iuser | undefined> { 
    
      let user = this.users.find(user=>user.id === id);
      return of (user)
    
  }

  // API Call to add new user in DB
  addUser(userObj : Iuser)
  {
     this.users.push(userObj)
     this.route.navigate(['/users'])
  }

  
// API Call to update user object
 
updateUser(updateObj : Iuser)
{
   let upadtedIndex = this.users.findIndex(obj=>obj.id===updateObj.id)
   console.log(upadtedIndex);
   this.users[upadtedIndex] = updateObj
  this.route.navigate(['users'])
}



onDelete(deletUser: string) {
  let index = this.users.findIndex(userDel => userDel.id === deletUser);

  if (index !== -1) {
    this.users.splice(index, 1);
  }
  this.route.navigate(['users'])
}



// ----------------------------------------------------


  // getUserData(id: string): Iuser {
  //   return this.users.find((user) => user.id === +id)!;
    
  // }


// ----------------------------------------------------

  
//   getUserData(id: string): Iuser | undefined {
   
//   return this.users.find(user => user.id === +id);
// }
// ----------------------------------------------------
  
}


