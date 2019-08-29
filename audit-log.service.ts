import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'; 
import { HttpClient } from '@angular/common/http'; 
import { AuditLogModel } from './audit-log.model';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuditLogService {
  constructor(private http: HttpClient) { }

  /* Using JSON data */

  // Using MSSQL data, via URL to separate backend system, from here, i.e. not using DSK. 
  getAuditEntries() {
    console.log('[pet-AuditLogService.service] Loading Audit entries from MSSQL via API URL');
    return this.http.get<AuditLogModel[]>('http://localhost:3000/api/AuditLogs')
      .toPromise()
      .then(res => res);
  }

  findAuditEntries(dt: Date, tt: string) {
    console.log('[AuditEntriesService.findAuditEntries] Finding AuditEntries from MSSQL via API URL');
   

    let dt1;
    if (dt == undefined) {
      dt1 = '2019-01-01';
    } else {
      dt1 = dt.toString();
    }
    let tt1;
    if (tt === undefined) {
      tt1 = '';
    }

    console.log(dt, dt1, tt1);

    const findURL =
    
    'http://localhost:3000/api/AuditLogs?filter={"where":{"WhenOccured":{"gte":"' + dt1 + '"}}}}';

    console.log('[AuditEntriesService.findAuditEntries] Search string:', findURL);

    return this.http.get(findURL)
  }
}
