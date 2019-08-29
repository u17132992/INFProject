import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { PetUpdate } from '../../app/petupdate';  

/*
  Generated class for the PetparentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PetupdateProvider {
  url = "https://ionicapi.conveyor.cloud/Api/PetUpdate";  
constructor(private http: HttpClient) { }  
getAllPetUpdate(): Observable<PetUpdate[]> {  
  return this.http.get<PetUpdate[]>(this.url + '/AllPetUpdateDetails');  
}  
getPetUpdateById(petupdateId: string): Observable<PetUpdate> {  
  return this.http.get<PetUpdate>(this.url + '/GetPetUpdateDetailsById/' + petupdateId);  
}  
createPetUpdate(petupdate: PetUpdate): Observable<PetUpdate> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.post<PetUpdate>(this.url + '/InsertPetUpdateDetails/',  
  petupdate, httpOptions);  
}  
updatePetUpdate(petupdate: PetUpdate): Observable<PetUpdate> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.put<PetUpdate>(this.url + '/UpdatePetUpdateDetails/',  
  petupdate, httpOptions);  
}  
deletePetUpdateById(petupdateid: string): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.delete<number>(this.url + '/DeletePetUpdateDetails?id=' +petupdateid,  
httpOptions);  
}  
}  