import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { PetParentModel } from './pet-parent.model';

@Injectable()

export class PetParentsService {

  constructor(private http: HttpClient) { }

  /* Using JSON data */
  /*getPetParents(): Promise<Petparent[]> {
    console.log('[PetParentsService] Loading PetParents from JSON');
    return this.http.get('./assets/pet-parents.json')
    .toPromise()
    .then(res => res.json() as Petparent[] );
  }
  //*/

  
  getPetParents(): Promise<PetParentModel[]> {
    console.log('[PetParentsService] Loading PetParents from MSSQL via API URL');

    return new Promise<PetParentModel[]>((resolve, reject) => {
      this.http.get<PetParentModel[]>('http://localhost:3000/api/PetParents')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[pet-PetParentsService.service | getPetParents] Failure')
        );
    });
  }

  findPetParent(id: number): Promise<PetParentModel> {
    console.log('[PetParentsService] Finding PetParent with id:', id);
    // http://localhost:3000/api/PetParents/?filter={"where":{"PetParentID":"1"}}
    const findURL = 'http://localhost:3000/api/PetParents/findOne?filter={"where":{"PetParentID":' + id + '}}';

    // Filtering arrays of objects';
    // + 'and:['

    // let searchParms;
    // let fieldCount = 0;

    // if (tPetParentID != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ',';
    //   }
    //   searchParms = searchParms + '{"PetParentID":"' + tPetParentID + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tName != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ',';
    //   }
    //   searchParms = searchParms + '{"Name":"' + tName + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tSurname != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ',';
    //   }
    //   searchParms = searchParms + '{"Surname":"' + tSurname + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tEmailAddress != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ',';
    //   }
    //   searchParms = searchParms + '{"EmailAddress":"' + tEmailAddress + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tPhoneNr != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ',';
    //   }
    //   searchParms = searchParms + '{"PhoneNr":"' + tPhoneNr + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tPhoneNr != "undefined") {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ",";
    //   }
    //   searchParms = searchParms + '{"PhoneNr":"' + tPhoneNr + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // if (tPets != 'undefined') {
    //   if (fieldCount > 1) {
    //     searchParms = searchParms + ",";
    //   }
    //   searchParms = searchParms + '{"Pets":"' + tPets + '"}'
    //   fieldCount = fieldCount + 1;
    // }
    // searchParms = searchParms + '}';

    // if (fieldCount > 1) {
    //   searchParms = '?filter[where]":and:[' + searchParms;
    //   searchParms = searchParms + ']';
    // }

   

    return new Promise<PetParentModel>((resolve, reject) => {
      this.http.get<PetParentModel>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[pet-PetParentsService.service | findPetParents] Pet Parent not found!')
        );
    });
  }

  deletePetParent(id: number): Promise<string> {
    console.log('[PetParentService] in deletePetParent(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PetParents/' + id)
        .subscribe(res => { 
          resolve(res);
        },
          err => reject('[pet-PetParentsService.service | deletePetParents] Failure')
        );
      });
    // return this.petparentApi.deleteById<Petparent>(petparentId)
  }

  createPetParent(petparent: any): Promise<PetParentModel> {
    console.log('[PetParentService] in createPetParent()');
    console.log(petparent);

    return new Promise<PetParentModel>((resolve, reject) => {
      const data = new PetParentModel(); 
      data.PetParentID = petparent.PetParentID;
      data.Name = petparent.Name;
      data.Surname = petparent.Surname;
      data.EmailAddress = petparent.EmailAddress;
      data.PhoneNr = petparent.PhoneNr;
      data.ParentAddress = petparent.ParentAddress;
      data.ParentPassword = petparent.ParentPassword;
      data.Pets = petparent.Pets;

      this.http.put<PetParentModel>('http://localhost:3000/api/PetParents', data)
        .subscribe(res => { 
          resolve(res);
        },
          err => reject('[pet-PetParentService.service | createPetParent] Failure')
        );
    });
  }

  updatePetParent(petparent: any): Promise<PetParentModel> {
    console.log('[PetParentService] in updatePetParent()');
    console.log(petparent);

    return new Promise<PetParentModel>((resolve, reject) => {
      this.http.put<PetParentModel>('http://localhost:3000/api/PetParents/' + petparent.PetParentID, petparent)
       
        .subscribe(res => { 
          resolve(res);
        },
          err => reject('[pet-PetSittersService.service | updatePetSitter] Failure')
        );
    });
  }
}
