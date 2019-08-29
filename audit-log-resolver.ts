// in pet-sitters.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/';
import { AuditLogService } from './audit-log.service';

@Injectable()
export class AuditLogResolver implements Resolve<any> {

  constructor(private auditLogService: AuditLogService) { }

  resolve() {
    return new Promise((resolve, reject) => {

      const breadcrumbs = [
        { url: '/', label: 'Audit-Entries' }
      ];

      // get records from data source
      this.auditLogService.getAuditEntries()
      .then(
        auditlogentries => {
          return resolve({
            auditlogentries,
            breadcrumbs
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}