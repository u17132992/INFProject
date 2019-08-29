import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRequestModel } from './service-requests.model';

@Injectable()
export class ServiceRequestsService {

  constructor(private http: HttpClient) { }
  getServiceRequests(): Promise<ServiceRequestModel[]> {
    console.log('[ServiceRequestsService | getServiceRequests] Loading ServiceRequests via API/MSSQL');

    return new Promise<ServiceRequestModel[]>((resolve, reject) => {
      this.http.get<ServiceRequestModel[]>('http://localhost:3000/api/ServiceRequests')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | getServiceRequests] Failure')
        );
    });
  }

  findServiceRequests(id: number): Promise<ServiceRequestModel[]> {
    console.log('[ServiceRequestsService | findServiceRequests] Finding ServiceRequests via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServiceRequests?filter={"where":{"ServiceRequestID":' + id + '}}';
    console.log(findURL);

    return new Promise<ServiceRequestModel[]>((resolve, reject) => {
      this.http.get<ServiceRequestModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | findServiceRequests] Failure')
        );
    });
  }

  findServiceRequestsForParent(ppid: number): Promise<ServiceRequestModel[]> {
    console.log('[ServiceRequestsService | findServiceRequestsForParent] Finding ServiceRequests via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServiceRequests?filter={"where":{"PetParentID":' + ppid + '}}';
    console.log(findURL);

    return new Promise<ServiceRequestModel[]>((resolve, reject) => {
      this.http.get<ServiceRequestModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | findServiceRequestsForParent] Failure')
        );
    });
  }

  findServiceRequestsSTATUS(tStat: string): Promise<ServiceRequestModel[]> {
    console.log('[ServiceRequestsService | findServiceRequestsSTATUS] Finding ServiceRequests via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServiceRequests?filter={"where":{"StatusDescription":"' + tStat + '"}}';
    console.log(findURL);

    return new Promise<ServiceRequestModel[]>((resolve, reject) => {
      this.http.get<ServiceRequestModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | findServiceRequestsSTATUS] Failure')
        );
    });
  }


  findServiceRequestsSTATUSForParent(tStat: string, tParentID: number): Promise<ServiceRequestModel[]> {
    console.log('[ServiceRequestsService | findServiceRequestsSTATUSForParent] Finding ServiceRequests via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServiceRequests?filter={"where":{"StatusDescription":"' 
                  
                   + tStat + '"}}';
    console.log(findURL);

    return new Promise<ServiceRequestModel[]>((resolve, reject) => {
      this.http.get<ServiceRequestModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | findServiceRequestsSTATUSForParent] Failure')
        );
    });
  }

  findNextID(): Promise<any>{
    console.log('[ServiceRequestComponent] findNextID');

    return new Promise<any>((resolve, reject) => {
      this.http.get('http://localhost:3000/api/ServiceRequests/count')
        .subscribe(res => {
          resolve(res.valueOf());
        },
          err => reject('[ServiceRequestsService | findNextID] Failure')
        );
    });
  }

  deleteServiceRequest(id: number): Promise<string> {
    console.log('[suburbs.service.ts] in deleteServiceRequest(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/ServiceRequests/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | deleteServiceRequests] Failure')
        );
    });
  }

  createServiceRequest(servicerequest: any): Promise<ServiceRequestModel> {
    console.log('[ServiceRequestsService | createServiceRequest]: ', servicerequest);

    return new Promise<ServiceRequestModel>((resolve, reject) => {
      const data = new ServiceRequestModel();
      data.RequestID = Math.floor((Math.random() * 10000) + 1); 
      data.DateStart = servicerequest.DateStart;
      data.DateEnd = servicerequest.DateEnd;
      data.Pets = servicerequest.Pets;
      data.StatusDescription = servicerequest.StatusDescription;
      data.SpecialNote = servicerequest.SpecialNote;
      data.PetParentID = servicerequest.PetParentID;
      data.PaymentID = servicerequest.PaymentID;
      data.TypeID = servicerequest.TypeID;
      data.SuburbID = servicerequest.SuburbID;
      data.CityID = servicerequest.CityID;

      this.http.put<ServiceRequestModel>('http://localhost:3000/api/ServiceRequests', data)
        .subscribe(csr => {
          resolve(csr);
        },
          err => reject('[ServiceRequestsService |  createServiceRequest] Failure')
        );
    });
  }

  updateServiceRequest(servicerequest: any) {
    console.log('[ServiceRequestsService | updateServiceRequest]');
    console.log(servicerequest);

    return new Promise<ServiceRequestModel>((resolve, reject) => {
      this.http.put<ServiceRequestModel>('http://localhost:3000/api/ServiceRequests/' + servicerequest.RequestID, servicerequest)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServiceRequestsService | updateServiceRequest] Failure')
        );
    });
  }
}
