import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuburbModel } from './suburb.model';

@Injectable()
export class SuburbsService {

  constructor(private http: HttpClient) { }

  getSuburbs(): Promise<SuburbModel[]> {
    console.log('[SuburbsService | getSuburbs] Loading Suburbs via API/MSSQL');
  
    return new Promise<SuburbModel[]>((resolve, reject) => {
      this.http.get<SuburbModel[]>('http://localhost:3000/api/Suburbs')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SuburbsService | getSuburbs] Failure')
        );
    });
  }

  findSuburbs(id: number): Promise<SuburbModel[]> {
    console.log('[SuburbsService | findSuburbs] Finding Suburbs via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Suburbs?filter={"where":{"SuburbID":' + id + '}}';
    console.log(findURL);

    return new Promise<SuburbModel[]>((resolve, reject) => {
      this.http.get<SuburbModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SuburbsService | findSuburbs] Failure')
        );
    });
  }

  deleteSuburb(id: number): Promise<string> {
    console.log('[suburbs.service.ts] in deleteSuburb(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Suburbs/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SuburbsService | deleteSuburbs] Failure')
        );
    });
  }

  createSuburb(suburb: any): Promise<SuburbModel> {
    console.log('[suburbs.service.ts] in createSuburb()');

    return new Promise<SuburbModel>((resolve, reject) => {
      const data = new SuburbModel(); 
      data.SuburbID = suburb.SuburbID;
      data.SuburbName = suburb.SuburbName;

      this.http.put<SuburbModel>('http://localhost:3000/api/Suburbs', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SuburbsService | createSuburb] Failure')
        );
    });
  }

  updateSuburb(suburb: any): Promise<SuburbModel> {
    console.log('[suburbs.service.ts] in updateSuburb()');
    console.log(suburb);

    return new Promise<SuburbModel>((resolve, reject) => {
    
      this.http.put<SuburbModel>('http://localhost:3000/api/Suburbs/' + suburb.SuburbID, suburb)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[SuburbsService | updateSuburb] Failure')
        );
    });
  }
}
