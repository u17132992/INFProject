// in       angulardemo\src\app\admin\pet-parents\pet-parents-resolver.ts
// service: angulardemo\src\app\services\pet-parents.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ResolveEnd } from '@angular/router/';
import { PetParentsService } from './pet-parents.service';

@Injectable()
export class PetParentsResolver implements Resolve<any> {

  constructor(private petParentsService: PetParentsService) { 
  }

  resolve() {
    return new Promise((resolve, reject) => {

      // get pet-parents from local json file
      this.petParentsService.getPetParents()
      .then(
        petparents => {
          return resolve({
            petparents
          });
        },
        err => {
          return resolve(null);
        }
      );
    });
  }
}
