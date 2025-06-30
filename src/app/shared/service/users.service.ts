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
      id: 1,
      name: 'Akash Kale',
      email: 'john.doe@example.com',
      role: 'Admin',
      avatar: 'assets/images/WhatsApp Image 2025-06-28 at 23.16.26_9047ff07.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Editor',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      role: 'Subscriber',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'Author',
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  ];

  constructor() {}

  // Api call to get all user data
  fetchAllUserdata(): Observable<Array<Iuser>> {
    return of(this.users);
  }
  
  // Get single user by ID
  // Api call to get single user data

    getUserData(id: string):Observable <Iuser | undefined> { 
    
      let user = this.users.find(user=>user.id === +id);
      return of (user)
    
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


