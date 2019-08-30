import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicePetModel } from './service-pet.model';

@Injectable({
  providedIn: 'root'
})

export class ServicePetService {

  constructor(private http: HttpClient) { }

  getServicePets(): Promise<ServicePetModel[]> {
    console.log('[ServicePetsService | getServicePets] Loading ServicePets via API/MSSQL');
  

    return new Promise<ServicePetModel[]>((resolve, reject) => {
      this.http.get<ServicePetModel[]>('http://localhost:3000/api/ServicePets')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePetsService | getServicePets] Failure')
        );
    });
  }

  findServicePets(id: number): Promise<ServicePetModel[]> {
    console.log('[ServicePetsService | findServicePets] Finding ServicePets via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServicePets?filter={"where":{"ServicePetID":' + id + '}}';
    console.log(findURL);

    return new Promise<ServicePetModel[]>((resolve, reject) => {
      this.http.get<ServicePetModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePetsService | findServicePets] Failure')
        );
    });
  }

  deleteServicePet(id: number): Promise<string> {
    console.log('[ServicePetsService | deleteServicePet](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/ServicePets/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePetsService | deleteServicePets] Failure')
        );
    });
  }

  createServicePet(newRec: any): Promise<ServicePetModel> {
    console.log('[ServicePetsService | createServicePet (newRec)]');

    return new Promise<ServicePetModel>((resolve, reject) => {
      const data = new ServicePetModel();
      data.PetID = newRec.PetID;
      data.RequestID = newRec.RequestID;
      data.PetParentID = newRec.PetParentID;

      this.http.put<ServicePetModel>('http://localhost:3000/api/ServicePets', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePetsService | createServicePet] Failure')
        );
    });
  }

  updateServicePet(pt: any): Promise<ServicePetModel> {
    console.log('[ServicePetsService | updateServicePet()');
    console.log(pt);

    return new Promise<ServicePetModel>((resolve, reject) => {
      this.http.put<ServicePetModel>('http://localhost:3000/api/ServicePets/' + pt.ServicePetID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePetsService | updateServicePet] Failure')
        );
    });
  }
}
