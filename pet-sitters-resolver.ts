// in pet-sitters.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/';
import { PetSittersService } from './pet-sitters.service';

@Injectable()
export class PetSittersResolver implements Resolve<any> {

  constructor(private petSittersService: PetSittersService) { }

  resolve() {
    return new Promise((resolve, reject) => {

      const breadcrumbs = [
        { url: '/', label: 'Pet-sitters' }
      ];

      // get records from data source
      this.petSittersService.getPetSitters()
      .then(
        petsitters => {
          return resolve({
            petsitters,
            breadcrumbs
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}