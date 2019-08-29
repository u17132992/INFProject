import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetSitterStatusModel } from './pet-sitter-status.model';

@Injectable({
  providedIn: 'root'
})

export class PetSitterStatusService {

  constructor(private http: HttpClient) { }

  getPetSitterStatuses(): Promise<PetSitterStatusModel[]> {
    console.log('[PetSitterStatusesService | getPetSitterStatuses] Loading PetSitterStatuses via API/MSSQL');
    // return this.http.get<PetSitterStatusModel[]>('http://localhost:3000/api/PetSitterStatuses')
    // .toPromise()
    // .then(res => res);

    return new Promise<PetSitterStatusModel[]>((resolve, reject) => {
      this.http.get<PetSitterStatusModel[]>('http://localhost:3000/api/PetSitterStatuses')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSitterStatusesService | getPetSitterStatuses] Failure')
        );
    });
  }

  findPetSitterStatuses(id: number): Promise<PetSitterStatusModel[]> {
    console.log('[PetSitterStatusesService | findPetSitterStatuses] Finding PetSitterStatuses via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PetSitterStatuses?filter={"where":{"PetSitterStatusID":' + id + '}}';
    console.log(findURL);

    return new Promise<PetSitterStatusModel[]>((resolve, reject) => {
      this.http.get<PetSitterStatusModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSitterStatusesService | findPetSitterStatuses] Failure')
        );
    });
  }

  deletePetSitterStatus(id: number): Promise<string> {
    console.log('[PetSitterStatusesService | deletePetSitterStatus](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PetSitterStatuses/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSitterStatusesService | deletePetSitterStatuses] Failure')
        );
    });
  }

  createPetSitterStatus(newRec: any): Promise<PetSitterStatusModel> {
    console.log('[PetSitterStatusesService | createPetSitterStatus (newRec)]');

    return new Promise<PetSitterStatusModel>((resolve, reject) => {
      const data = new PetSitterStatusModel();
      data.SitterStatusID = newRec.SitterStatusID;
      data.StatusDescription = newRec.StatusDescription;
      data.VerifiedStatus = newRec.VerifiedStatus;

      this.http.put<PetSitterStatusModel>('http://localhost:3000/api/PetSitterStatuses', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSitterStatusesService | createPetSitterStatus] Failure')
        );
    });
  }

  updatePetSitterStatus(pt: any): Promise<PetSitterStatusModel> {
    console.log('[PetSitterStatusesService | updatePetSitterStatus()');
    console.log(pt);

    return new Promise<PetSitterStatusModel>((resolve, reject) => {
      this.http.put<PetSitterStatusModel>('http://localhost:3000/api/PetSitterStatuses/' + pt.PetSitterStatusID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PetSitterStatusesService | updatePetSitterStatus] Failure')
        );
    });
  }
}
