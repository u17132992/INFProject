import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetTypeModel } from './pet-type.model';

@Injectable()
export class PetTypeService {

  constructor(private http: HttpClient) { }

  getPetTypes(): Promise<PetTypeModel[]> {
    console.log('[PetTypesService | getPetTypes] Loading PetTypes via API/MSSQL');
  
    return new Promise<PetTypeModel[]>((resolve, reject) => {
      this.http.get<PetTypeModel[]>('http://localhost:3000/api/PetTypes')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetTypesService | getPetTypes] Failure')
        );
    });
  }

  findPetTypes(id: number): Promise<PetTypeModel[]> {
    console.log('[PetTypesService | findPetTypes] Finding PetTypes via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PetTypes?filter={"where":{"PetTypeID":' + id + '}}';
    console.log(findURL);

    return new Promise<PetTypeModel[]>((resolve, reject) => {
      this.http.get<PetTypeModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetTypesService | findPetTypes] Failure')
        );
    });
  }

  deletePetType(id: number): Promise<string> {
    console.log('[PetTypesService | deletePetType](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PetTypes/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetTypesService | deletePetTypes] Failure')
        );
    });
  }

  createPetType(pt: any): Promise<PetTypeModel> {
    console.log('[PetTypeService | createPetType]', pt);

    return new Promise<PetTypeModel>((resolve, reject) => {
      const data = new PetTypeModel();
      data.PetTypeID = Math.floor((Math.random() * 100) + 1); 
      data.PetTypeDescription = pt.PetTypeDescription;
      data.PetBreedID = pt.PetBreedID;

      console.log('[PetTypeService | inserting PetType ID]', data.PetTypeID);

      this.http.put<PetTypeModel>('http://localhost:3000/api/PetTypes', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetTypesService | createPetType] Failure')
        );
    });
  }

  updatePetType(pt: any): Promise<PetTypeModel> {
    console.log('[PetTypesService | updatePetType]', pt);

    return new Promise<PetTypeModel>((resolve, reject) => {
  
      this.http.put<PetTypeModel>('http://localhost:3000/api/PetTypes/' + pt.PetTypeID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetTypesService | updatePetType] Failure')
        );
    });
  }
}
