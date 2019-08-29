import { Injectable } from '@angular/core';

export interface User
{
  name: string;
  role: number;
}
@Injectable()
export class AuthProvider {
  currentUser: User;

  constructor() {
    
  }

  login(name: string, pw: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (name === 'james@gmail.com' && pw === '123456') {
        this.currentUser = {
          name: name, 
          role: 0
        };
        resolve(true);
      } else if (name === 'jack@gmail.com' && pw === '123456') {
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve (true);
      } else {
        reject(false);
      }
    });
  } 

  isLoggedIn() {
    return this.currentUser != null;
  }

  logout() {
    this.currentUser = null;
  }

  isAdmin() {
    return this.currentUser.role === 0;
  }
  

}
