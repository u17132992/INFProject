import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetSitterModel } from './pet-sitter.model';

@Injectable()
export class PetSittersService {

  constructor(private http: HttpClient) { }

  getPetSitters(): Promise<PetSitterModel[]> {
    console.log('[PetSittersService | getPetSitters] Loading PetSitters via API/MSSQL');
    // return this.http.get<PetSitterModel[]>('http://localhost:3000/api/PetSitters')
    // .toPromise()
    // .then(res => res);

    return new Promise<PetSitterModel[]>((resolve, reject) => {
      this.http.get<PetSitterModel[]>('http://localhost:3000/api/PetSitters')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSittersService | getPetSitters] Failure')
        );
    });
  }

  findPetSitters(id: number): Promise<PetSitterModel[]> {
    console.log('[PetSittersService | findPetSitters] Finding PetSitters via API/MSSQL');
    // http://localhost:3000/api/PetSitters/?filter={"where":{"PetSitterID":"1"}}
    const findURL = 'http://localhost:3000/api/PetSitters?filter={"where":{"PetSitterID":' + id + '}}';
    console.log(findURL);

    return new Promise<PetSitterModel[]>((resolve, reject) => {
      this.http.get<PetSitterModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSittersService | findPetSitters] Failure')
        );
    });
  }

  deletePetSitter(id: number): Promise<string> {
    console.log('[sitters.service.ts] in deletePetSitter(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PetSitters/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSittersService | deletePetSitters] Failure')
        );
    });
  }

  createPetSitter(petsitter: any): Promise<PetSitterModel> {
    console.log('[PetSittersService] in createPetSitter()');

    return new Promise<PetSitterModel>((resolve, reject) => {
      const data = new PetSitterModel(); // this is the PetSitter model also imported from the SDK

      data.PetSitterID = petsitter.PetSitterID;
      data.PetSitterName = petsitter.PetSitterName;
      data.PetSitterSurname = petsitter.PetSitterSurname;
      data.PetSitterEmailAddress = petsitter.PetSitterEmailAddress;
      data.PetSitterPhoneNum = petsitter.PetSitterPhoneNum;
      data.PetSitterAddress = petsitter.PetSitterAddress;
      data.SitterPassword = petsitter.SitterPassword;
      data.Gender = petsitter.Gender;
      data.Age = petsitter.Age;
      data.Reference = petsitter.Reference;
      data.About = petsitter.About;

      this.http.put<PetSitterModel>('http://localhost:3000/api/PetSitters', data)
        .subscribe(res => { 
          resolve(res);
        },
          err => reject('[PetSittersService | createPetSitter] Failure')
        );
    });
  }

  updatePetSitter(petsitter: any): Promise<PetSitterModel> {
    console.log('[PetSittersService] in updatePetSitter()');
    console.log(petsitter);

    return new Promise<PetSitterModel>((resolve, reject) => {
      
      this.http.put<PetSitterModel>('http://localhost:3000/api/PetSitters/' + petsitter.PetSitterID, petsitter)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSittersService | updatePetSitter] Failure')
        );
    });
  }
}
