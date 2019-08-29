import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceTypeModel } from './service-type.model';

@Injectable({
  providedIn: 'root'
})

export class ServiceTypeService {

  constructor(private http: HttpClient) { }

  getServiceTypes(): Promise<ServiceTypeModel[]> {
    console.log('[ServiceTypesService | getServiceTypes] Loading ServiceTypes via API/MSSQL');
 

    return new Promise<ServiceTypeModel[]>((resolve, reject) => {
      this.http.get<ServiceTypeModel[]>('http://localhost:3000/api/ServiceTypes')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceTypesService | getServiceTypes] Failure')
        );
    });
  }

  findServiceTypes(id: number): Promise<ServiceTypeModel[]> {
    console.log('[ServiceTypesService | findServiceTypes] Finding ServiceTypes via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServiceTypes?filter={"where":{"ServiceTypeID":' + id + '}}';
    console.log(findURL);

    return new Promise<ServiceTypeModel[]>((resolve, reject) => {
      this.http.get<ServiceTypeModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceTypesService | findServiceTypes] Failure')
        );
    });
  }

  deleteServiceType(id: number): Promise<string> {
    console.log('[ServiceTypesService | deleteServiceType](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/ServiceTypes/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceTypesService | deleteServiceTypes] Failure')
        );
    });
  }

  createServiceType(newRec: any): Promise<ServiceTypeModel> {
    console.log('[ServiceTypesService | createServiceType (newRec)]');

    return new Promise<ServiceTypeModel>((resolve, reject) => {
      const data = new ServiceTypeModel();
      data.TypeID = newRec.TypeID;
      data.ServiceTypeDescription = newRec.ServiceTypeDescription;
      data.PriceID = newRec.PriceID;

      this.http.put<ServiceTypeModel>('http://localhost:3000/api/ServiceTypes', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceTypesService | createServiceType] Failure')
        );
    });
  }

  updateServiceType(pt: any): Promise<ServiceTypeModel> {
    console.log('[ServiceTypesService | updateServiceType()');
    console.log(pt);

    return new Promise<ServiceTypeModel>((resolve, reject) => {
      this.http.put<ServiceTypeModel>('http://localhost:3000/api/ServiceTypes/' + pt.ServiceTypeID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceTypesService | updateServiceType] Failure')
        );
    });
  }
}
