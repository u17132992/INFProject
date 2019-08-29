import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetModel } from './pet.model';

@Injectable()
export class PetService {

  constructor(private http: HttpClient) { }

  getPets(): Promise<PetModel[]> {
    console.log('[PetService | getPets] Loading Pets via API/MSSQL');

    return new Promise<PetModel[]>((resolve, reject) => {
      this.http.get<PetModel[]>('http://localhost:3000/api/Pets')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | getPets] Failure')
        );
    });
  }

  findPets(id: number): Promise<PetModel[]> {
    console.log('[PetService | findPets] Finding Pets via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Pets?filter={"where":{"PetID":' + id + '}}';
    console.log(findURL);

    return new Promise<PetModel[]>((resolve, reject) => {
      this.http.get<PetModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | findPets] Failure')
        );
    });
  }

  findPetsForParent(parentid: number): Promise<PetModel[]> {
    console.log('[PetService | findPetsForParent] Finding Pets via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Pets?filter={"where":{"PetParentID":' + parentid + '}}';
    console.log(findURL);

    return new Promise<PetModel[]>((resolve, reject) => {
      this.http.get<PetModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | findPets] Failure')
        );
    });
  }

  deletePet(id: number): Promise<string> {
    console.log('[petservice] in deletePet(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Pets/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | deletePet] Failure')
        );
    });
  }

  createPet(p: any): Promise<PetModel> {
    console.log('[petservice] in createPet()');

    return new Promise<PetModel>((resolve, reject) => {
      const data = new PetModel(); 
      data.PetID = Math.floor((Math.random() * 100) + 1); 
      data.PetType = p.PetType;
      data.PetAmount = p.PetAmount;
      data.PetName = p.PetName;
      data.PetTypeID = p.PetTypeID;
      data.PetParentID = p.PetParentID;

      this.http.put<PetModel>('http://localhost:3000/api/Pets', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | createPet] Failure')
        );
    });
  }

  updatePet(p: any): Promise<PetModel> {
    console.log('[petservice] in updatePet()');
    console.log(p);

    return new Promise<PetModel>((resolve, reject) => {
 
      this.http.put<PetModel>('http://localhost:3000/api/Pets/' + p.PetID, p)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetService | updatePet] Failure')
        );
    });
  }
}
