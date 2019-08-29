
import { Injectable } from '@angular/core';
import { Resolve, ResolveEnd } from '@angular/router/';
import { SuburbsService } from './suburbs.service';

@Injectable()
export class SuburbsResolver implements Resolve<any> {

  constructor(private suburbsService: SuburbsService) {
  }

  resolve() {
    return new Promise((resolve, reject) => {

    
      this.suburbsService.getSuburbs()
      .then(
        suburbs => {
          return resolve({
            suburbs
          });
        },
        err => {
          return resolve(null);
        }
      );
    });
  }
}
