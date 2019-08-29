
import { Injectable } from '@angular/core';
import { Resolve, ResolveEnd } from '@angular/router/';
import { SystemUsersService } from './systemuser.service';

@Injectable()
export class SystemUserResolver implements Resolve<any> {

  constructor(private service: SystemUsersService) {
  }

  resolve() {
    return new Promise((resolve, reject) => {

    
      this.service.getSystemUsers()
      .then(
        systemusers => {
          return resolve({
            systemusers
          });
        },
        err => {
          return resolve(null);
        }
      );
    });
  }
}
