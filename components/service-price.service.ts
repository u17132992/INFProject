import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicePriceModel } from './service-price.model';

@Injectable({
  providedIn: 'root'
})

export class ServicePriceService {

  constructor(private http: HttpClient) { }

  getServicePrices(): Promise<ServicePriceModel[]> {
    console.log('[ServicePricesService | getServicePrices] Loading ServicePrices via API/MSSQL');
   
    return new Promise<ServicePriceModel[]>((resolve, reject) => {
      this.http.get<ServicePriceModel[]>('http://localhost:3000/api/ServicePrices')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePricesService | getServicePrices] Failure')
        );
    });
  }

  findServicePrices(id: number): Promise<ServicePriceModel[]> {
    console.log('[ServicePricesService | findServicePrices] Finding ServicePrices via API/MSSQL');
    const findURL = 'http://localhost:3000/api/ServicePrices?filter={"where":{"ServicePriceID":' + id + '}}';
    console.log(findURL);

    return new Promise<ServicePriceModel[]>((resolve, reject) => {
      this.http.get<ServicePriceModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePricesService | findServicePrices] Failure')
        );
    });
  }

  deleteServicePrice(id: number): Promise<string> {
    console.log('[ServicePricesService | deleteServicePrice](' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/ServicePrices/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePricesService | deleteServicePrices] Failure')
        );
    });
  }

  createServicePrice(newRec: any): Promise<ServicePriceModel> {
    console.log('[ServicePricesService | createServicePrice (newRec)]');

    return new Promise<ServicePriceModel>((resolve, reject) => {
      const data = new ServicePriceModel();
      data.PriceID = newRec.PriceID;
      data.PriceDescription = newRec.PriceDescription;

      this.http.put<ServicePriceModel>('http://localhost:3000/api/ServicePrices', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePricesService | createServicePrice] Failure')
        );
    });
  }

  updateServicePrice(pt: any): Promise<ServicePriceModel> {
    console.log('[ServicePricesService | updateServicePrice()');
    console.log(pt);

    return new Promise<ServicePriceModel>((resolve, reject) => {
      this.http.put<ServicePriceModel>('http://localhost:3000/api/ServicePrices/' + pt.ServicePriceID, pt)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[ServicePricesService | updateServicePrice] Failure')
        );
    });
  }
}

