import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityModel } from './city.model';

@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCities(): Promise<CityModel[]> {
    console.log('[CitiesService | getCities] Loading Cities via API/MSSQL');
  

    return new Promise<CityModel[]>((resolve, reject) => {
      this.http.get<CityModel[]>('http://localhost:3000/api/Cities')
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[CitiesService | getCities] Failure')
        );
    });
  }

  findCities(id: number): Promise<CityModel[]> {
    console.log('[CitiesService | findCities] Finding Cities via API/MSSQL');
    const findURL = 'http://localhost:3000/api/Cities?filter={"where":{"CityID":' + id + '}}';
    console.log(findURL);

    return new Promise<CityModel[]>((resolve, reject) => {
      this.http.get<CityModel[]>(findURL)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[CitiesService | findCities] Failure')
        );
    });
  }

  deleteCity(id: number): Promise<string> {
    console.log('[suburbs.service.ts] in deleteCity(' + id + ')');

    return new Promise<string>((resolve, reject) => {
      this.http.delete<string>('http://localhost:3000/api/Cities/' + id)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[CitiesService | deleteCities] Failure')
        );
    });
  }

  createCity(suburb: any): Promise<CityModel> {
    console.log('[suburbs.service.ts] in createCity()');

    return new Promise<CityModel>((resolve, reject) => {
      const data = new CityModel();
      data.CityID = suburb.CityID;
      data.CityName = suburb.CityName;

      this.http.put<CityModel>('http://localhost:3000/api/Cities', data)
        .subscribe(res => {
          resolve(res);
        },
          err => reject('[CitiesService | createCity] Failure')
        );
    });
  }

  updateCity(suburb: any): Promise<CityModel> {
    console.log('[suburbs.service.ts] in updateCity()');
    console.log(suburb);

    return new Promise<CityModel>((resolve, reject) => {
    
      this.http.put<CityModel>('http://localhost:3000/api/Cities/' + suburb.CityID, suburb)

        .subscribe(res => {
          resolve(res);
        },
          err => reject('[CitiesService | updateCity] Failure')
        );
    });
  }
}
