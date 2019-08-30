import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PotentialSitterModel } from './potential-sitter.model';

@Injectable()
export class PotentialSitterService {

  constructor(private http: HttpClient) { }

  getPotentialSitters(): Promise<PotentialSitterModel[]> {
    console.log('[PotentialSittersService | getPotentialSitters] Loading PotentialSitters via API/MSSQL');


    return new Promise<PotentialSitterModel[]>((resolve, reject) => {
      this.http.get<PotentialSitterModel[]>('http://localhost:3000/api/PotentialSitters')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | getPotentialSitters] Failure')
        );
    });
  }

  findPotentialSitters(id: number): Promise<PotentialSitterModel[]> {
    console.log('[PotentialSittersService | findPotentialSitters] Finding PotentialSitters via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PotentialSitters?filter={"where":{"PotentialSitterID":' + id + '}}';
    console.log(findURL);

    return new Promise<PotentialSitterModel[]>((resolve, reject) => {
      this.http.get<PotentialSitterModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | findPotentialSitters] Failure')
        );
    });
  }

  findPotentialSittersForRequest(requestid: number): Promise<PotentialSitterModel[]> {
    console.log('[PotentialSittersService | findPotentialSittersForRequest] Finding PotentialSitters via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PotentialSitters?filter={"where":{"RequestID":' + requestid + '}}';
    console.log(findURL);

    return new Promise<PotentialSitterModel[]>((resolve, reject) => {
      this.http.get<PotentialSitterModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | findPotentialSittersForRequest] Failure')
        );
    });
  }

  findPotentialSittersForParent(petparentid: number): Promise<PotentialSitterModel[]> {
    console.log('[PotentialSittersService | findPotentialSittersForParent] Finding PotentialSitters via API/MSSQL');
    const findURL = 'http://localhost:3000/api/PotentialSitters?filter={"where":{"PetParentID":' + petparentid + '}}';
    console.log(findURL);

    return new Promise<PotentialSitterModel[]>((resolve, reject) => {
      this.http.get<PotentialSitterModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | findPotentialSittersForParent] Failure')
        );
    });
  }

  deletePotentialSitter(id: number): Promise<string> {
    console.log('[PotentialSittersService | deletePotentialSitter](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/PotentialSitters/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | deletePotentialSitters] Failure')
        );
    });
  }

  createPotentialSitter(ps: any): Promise<PotentialSitterModel> {
    console.log('[psis.service.ts] in createPotentialSitter()');

    return new Promise<PotentialSitterModel>((resolve, reject) => {
      const data = new PotentialSitterModel(); 
      data.SitterID = Math.floor((Math.random() * 10000) + 1); 
      data.SitterName = ps.SitterName;
      data.SitterSurname = ps.SitterSurname;
      data.SitterCity = ps.SitterCity;
      data.PetSitterID = ps.PetSitterID;
      data.RequestID = ps.RequestID;
      data.PetParentID = ps.PetParentID;
      data.ApproveID = ps.ApproveID;

      this.http.put<PotentialSitterModel>('http://localhost:3000/api/PotentialSitters', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | createPotentialSitter] Failure')
        );
    });
  }

  updatePotentialSitter(ps: any): Promise<PotentialSitterModel> {
    console.log('[PotentialSittersService | updatePotentialSitter()');
    console.log(ps);

    return new Promise<PotentialSitterModel>((resolve, reject) => {
    
      this.http.put<PotentialSitterModel>('http://localhost:3000/api/PotentialSitters/' + ps.PotentialSitterID, ps)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[PotentialSittersService | updatePotentialSitter] Failure')
        );
    });
  }
}
