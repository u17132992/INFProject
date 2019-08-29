
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/';
import { ServiceRequestsService } from './service-requests.service';

@Injectable()
export class ServiceRequestsResolver implements Resolve<any> {

  constructor(private serviceRequestService: ServiceRequestsService) { }

  resolve() {
    return new Promise((resolve, reject) => {

      
      this.serviceRequestService.getServiceRequests()
        .then(
          servicerequests => {
            return resolve({
              servicerequests
            });
          },
          err => {
            return resolve(null);
          }
        );
    });
  }
}
